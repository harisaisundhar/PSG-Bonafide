import {
  UserOutlined,
  LockOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const IconComponent = ({ icon, properties, onClick }) => {
  if (icon === "User") {
    return <UserOutlined style={{ ...properties }} onClick={onClick} />;
  } else if (icon === "Lock") {
    return <LockOutlined style={{ ...properties }} onClick={onClick} />;
  } else if (icon === "Solution") {
    return <SolutionOutlined style={{ ...properties }} onClick={onClick} />;
  } else if (icon === "Loading") {
    return <LoadingOutlined style={{ ...properties }} onClick={onClick} />;
  } else if (icon === "Smile") {
    return <SmileOutlined style={{ ...properties }} onClick={onClick} />;
  }
};

export { IconComponent };
