import React from "react";
import { Row, Col, Form, Input, Select, Upload, Button, message } from "antd";
import { IconComponent } from "../helpers/iconMap";

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      uploading: false,
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFileChange(info) {
    let files = info.fileList;
    console.log(files);
    var fileList = files.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    console.log(fileList);
    this.setState((prevState) => ({
      fileList: [...prevState.fileList, fileList],
    }));
  }

  handleUpload() {
    console.log(this.state.fileList);
  }

  render() {
    const props = {
      beforeUpload: (file) => {
        if (file.type !== "application/pdf") {
          message.error(`${file.name} is not a pdf file`);
        }
        return file.type === "application/pdf" ? true : Upload.LIST_IGNORE;
      },
      onChange: (info) => {
        this.handleFileChange(info);
      },
    };

    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        style={{ padding: "5%" }}
      >
        <Row>
          <Col span={16} xs={24} md={16}>
            <Form.Item
              label="Title"
              name="Title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Select
                style={{
                  borderRadius: "5px",
                  marginTop: "5px",
                  padding: "1%",
                  width: "100%",
                }}
                placeholder="Select title"
              >
                <Select.Option value="internship">Internship</Select.Option>
                <Select.Option value="offCampus">Off Campus</Select.Option>
                <Select.Option value="passport">Passport</Select.Option>
                <Select.Option value="competition">Competition</Select.Option>
                <Select.Option value="others">Others</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={16} xs={24} md={16}>
            <Form.Item
              label="Description"
              name="Description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <Input.TextArea
                placeholder="Enter description"
                style={{
                  borderRadius: "5px",
                  marginTop: "5px",
                  padding: "1%",
                }}
                rows={4}
              />
            </Form.Item>
          </Col>
          <Col span={16} xs={24} md={16}>
            <Form.Item
              label="Upload Documents"
              rules={[
                { required: true, message: "Please upload the documents!" },
              ]}
            >
              <Upload {...props}>
                <Button icon={<IconComponent icon="Upload" />}>
                  Upload pdf
                </Button>
              </Upload>
              <Button
                type="primary"
                onClick={this.handleUpload}
                disabled={this.state.fileList.length < 1}
                loading={this.state.uploading}
                style={{ marginTop: 16 }}
              >
                {this.state.uploading ? "Uploading" : "Start Upload"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Apply;
