import React from "react";
import { Steps } from "antd";
import { IconComponent } from "../helpers/iconMap";
import { Row } from "antd";

class List extends React.Component {
  render() {
    const { Step } = Steps;

    return (
      <div>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "60em",
            }}
          >
            <Steps responsive={true}>
              <Step
                status="finish"
                title="Applied"
                icon={<IconComponent icon="User" />}
              />
              <Step
                status="finish"
                title="Mail Sent"
                icon={<IconComponent icon="Solution" />}
              />
              <Step
                status="process"
                title="Tutor Review"
                icon={<IconComponent icon="Loading" />}
              />
              <Step
                status="wait"
                title="Hod Review"
                icon={<IconComponent icon="Smile" />}
              />
            </Steps>
          </div>
        </Row>
      </div>
    );
  }
}
export default List;
