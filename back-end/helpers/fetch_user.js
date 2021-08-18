const axios = require("axios");

exports.fetch_user = async ({ role, id, cookies }) => {
  const url = `https://nucleus.amcspsgtech.in/server/profile/${id}?role=${role}`;
  const xAmcsAuth = cookies[0].substring(
    cookies[0].indexOf("=") + 1,
    cookies[0].indexOf(";")
  );
  const xAmcsRefresh = cookies[1].substring(
    cookies[1].indexOf("=") + 1,
    cookies[1].indexOf(";")
  );
  const requestHeader = {
    Cookie: `x-amcs-auth=${xAmcsAuth};x-amcs-refresh=${xAmcsRefresh}`,
  };
  const response = await axios.get(url, {
    headers: requestHeader,
  });
  if (response.status === 200) {
    return response.data.userDetails;
  } else {
    return {};
  }
};
