import React from "react";
import { Card, Tabs, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: "Enter student roll number",
      type: "student",
      id: "",
      password: "",
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(activeKey) {
    if (activeKey === "student") {
      this.setState({
        inputMessage: "Enter student roll number",
        type: "student",
      });
    } else if (activeKey === "faculty") {
      this.setState({ inputMessage: "Enter faculty ID", type: "faculty" });
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
                prefix={<UserOutlined />}
                placeholder={this.state.inputMessage}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Enter your password" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Log in</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
