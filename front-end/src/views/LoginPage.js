import React from "react";
import { Card, Tabs, Form, Input, Button, Row, Col } from "antd";
import { IconComponent } from "../helpers/iconMap";
import { useHistory } from "react-router";
const { TabPane } = Tabs;

class LoginPageImplementation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: "Enter student roll number",
      type: "student",
      id: "",
      password: "",
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  handleLoginClick(e) {
    this.props.history.push("/app/" + this.state.type);
  }
  handleTabChange(activeKey) {
    if (activeKey === "student") {
      this.setState({
        inputMessage: "Enter student roll number",
        type: "student",
      });
    } else if (activeKey === "faculty") {
      this.setState({ inputMessage: "Enter faculty ID", 
      type: "faculty" });
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          border: "1px solid black",
        }}
      >
        <Card
          title={
            <b>
              <p
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                Login
              </p>
            </b>
          }
          style={{ width: 400, background: "#ECECF9" }}
        >
          <Tabs
            defaultActiveKey="student"
            centered
            onChange={this.handleTabChange}
          >
            <TabPane tab="Student" key="student"></TabPane>
            <TabPane tab="Faculty" key="faculty"></TabPane>
          </Tabs>
          <Form>
            <Form.Item
              name="id"
              rules={[{ required: true, message: "Enter your id" }]}
            >
              <Input
                prefix={<IconComponent icon="User" />}
                placeholder={this.state.inputMessage}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Enter your password" }]}
            >
              <Input.Password
                prefix={<IconComponent icon="Lock" />}
                placeholder="Enter password"
              />
            </Form.Item>
            <Row justify="center">
              <Col span={8}></Col>
              <Col span={8}>
                <Form.Item>
                  <Button onClick={this.handleLoginClick} type="primary">Log in</Button>
                </Form.Item>
              </Col>
              <Col span={8}></Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}

export default function LoginPage() {
  const history = useHistory();
  return <LoginPageImplementation history={history} />;
}
