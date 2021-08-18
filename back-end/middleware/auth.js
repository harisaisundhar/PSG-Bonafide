require("dotenv").config();

module.exports = (req, res, next) => {
  const { bonafide_token } = req.cookies;
  console.log(bonafide_token);
  if (!bonafide_token) {
    res.status(403).json({ reason: "Cookie not set" });
  } else {
    try {
      const data = jsonwebtoken.verify(bonafide_token, process.env.JWT_SECRET);
      req.user = data;
      console.log(req.user);
      return next();
    } catch (err) {
      return res.status(403).json({ reason: "Broken Cookie" });
    }
  }
  next();
};
