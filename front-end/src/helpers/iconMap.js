import {
  UserOutlined,
  LockOutlined,
  SolutionOutlined,
  LoadingOutlined,
  ReconciliationOutlined,
  ContainerOutlined,
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
  } else if (icon === "Tutor") {
    return (
      <ReconciliationOutlined style={{ ...properties }} onClick={onClick} />
    );
  } else if (icon === "HOD") {
    return <ContainerOutlined style={{ ...properties }} onClick={onClick} />;
  }
};

export { IconComponent };
