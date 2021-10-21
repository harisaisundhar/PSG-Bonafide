import React from "react";
import { Steps } from "antd";
import { IconComponent } from "../helpers/iconMap";
import { Row, Card, Button, Modal } from "antd";
import { EditOutlined, DownloadOutlined, SettingOutlined } from '@ant-design/icons';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModalData: { title: "", status: "" },
      visible: false,
      stepData: [],
      stepIcon: [],
    };
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleModalClick(title, status, e) {
    const data = {
      title: title,
      status: status,
    };
  
    var array = [];
    var arr = ["User", "Solution", "Tutor", "HOD"];
    for (let i = 0; i < 4; i++) {
      if (i === parseInt(status)) {
        array[i] = "process";
        arr[i] = "Loading";
      } else {
        if (i < parseInt(status)) array[i] = "finish";
        else array[i] = "wait";
      }
    }
    this.setState({
      currentModalData: data,
      visible: true,
      stepData: array,
      stepIcon: arr,
    });
  }

  render() {
    const { Step } = Steps;
    const details = [
      {
        id: "1",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "0",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "1",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "2",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "3",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "3",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "2",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "1",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "2",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "0",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "1",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Bonafide Title",
        description: "Bonafide Description",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "3",
        comments: "u are not nice",
      },
    ];
    return (
      <div>
        {details.map((item) => {
          return (
            <Row style={{ justifyContent: "center" }}>
              <Card
                style={{ margin: "15px", width: "50em" }}
                title={item.title}

              >
                {item.description}
                <Button
                  type="primary"
                  onClick={() => this.handleModalClick(item.title, item.status)}
                  style={{ float: "right" }}
                >
                  Progress
                </Button>
              </Card>
            </Row>
          );
        })}
        <Modal
          title={
            <b>{this.state.currentModalData.title + "'s current status"}</b>
          }
          centered
          visible={this.state.visible}
          onOk={() => this.setState({ visible: false })}
          onCancel={() => this.setState({ visible: false })}
          cancelButtonProps={{ style: { display: "none" } }}
          width={650}
        >
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
                  status={this.state.stepData[0]}
                  title="Applied"
                  icon={<IconComponent icon={this.state.stepIcon[0]} />}
                />
                <Step
                  status={this.state.stepData[1]}
                  title="Mail Sent"
                  icon={<IconComponent icon={this.state.stepIcon[1]} />}
                />
                <Step
                  status={this.state.stepData[2]}
                  title="Tutor Review"
                  icon={<IconComponent icon={this.state.stepIcon[2]} />}
                />
                <Step
                  status={this.state.stepData[3]}
                  title="Hod Review"
                  icon={<IconComponent icon={this.state.stepIcon[3]} />}
                />
              </Steps>
            </div>
          </Row>
        </Modal>
      </div>
    );
  }
}
export default List;
