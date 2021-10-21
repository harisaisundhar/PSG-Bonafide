import React from "react";
import { Menu } from "antd";
import Bonafide from "../assets/images/bonafide.png";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: window.location.pathname.split("/")[3],
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  handleNavClick(e) {
    this.props.sideBarClick(e.key);
    this.setState({ page: e.key });
  }

  render() {
    return (
      <div>
        <div
          className="logo"
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            alt="Bonu"
            src={Bonafide}
            height={180}
            width={200}
            style={{ paddingBottom: "10%" }}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["apply"]}
          selectedKeys={this.state.page}
          style={{
            border: "none",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            fontSize: "15px",
          }}
          onClick={this.handleNavClick}
        >
          <br></br>
          <br></br>
          <br></br>
          <Menu.Item
            key="apply"
            style={{ borderRadius: "4px", background: "5853bc" }}
          >
            Apply For Bonafide
          </Menu.Item>
          <br></br>
          <Menu.Item
            key="list"
            style={{ borderRadius: "4px", background: "5853bc" }}
          >
            List of Bonafides
          </Menu.Item>
          <br></br>
        </Menu>
      </div>
    );
  }
}

export default SideBar;
