import { UserOutlined, LockOutlined } from "@ant-design/icons";

const IconComponent = ({ icon, properties, onClick }) => {
  if (icon === "User") {
    return <UserOutlined style={{ ...properties }} onClick={onClick} />;
  } else if (icon === "Lock") {
    return <LockOutlined style={{ ...properties }} onClick={onClick} />;
  }
};

export { IconComponent };
