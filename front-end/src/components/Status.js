import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Steps } from "antd";
import { IconComponent } from "../helpers/iconMap";

class Status extends React.Component {
  render() {
    const { Step } = Steps;

    return (
      <div>
        <BrowserView>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "60em",
              paddingTop: "150px",
              marginLeft: "150px",
            }}
          >
            <Steps size="large">
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
        </BrowserView>
        <MobileView>
          <div
            style={{
              paddingTop: "100px",
              marginLeft: "50px",
            }}
          >
            <Steps direction="vertical" size="large">
              <Step
                style={{ height: "auto", minHeight: "100px" }}
                status="finish"
                description="This is a description. This is a description."
                title="Applied"
                icon={<IconComponent icon="User" />}
              />
              <Step
                style={{ height: "auto", minHeight: "100px" }}
                status="finish"
                description="This is a description. This is a description."
                title="Mail Sent"
                icon={<IconComponent icon="Solution" />}
              />
              <Step
                style={{ height: "auto", minHeight: "100px" }}
                status="process"
                description="This is a description. This is a description."
                title="Tutor Review"
                icon={<IconComponent icon="Loading" />}
              />
              <Step
                style={{ height: "auto", minHeight: "100px" }}
                status="wait"
                description="This is a description. This is a description."
                title="Hod Review"
                icon={<IconComponent icon="Smile" />}
              />
            </Steps>
          </div>
        </MobileView>
      </div>
    );
  }
}
export default Status;
