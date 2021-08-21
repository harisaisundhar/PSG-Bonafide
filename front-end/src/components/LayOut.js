import React from "react";
import { Layout, Menu, Space } from "antd";
import Bonafide from "../assets/images/bonafide.png";
import SideBar from "../views/SideBar";
import { Header } from "antd/lib/layout/layout";

const { Sider } = Layout;
class LayOut extends React.Component {
constructor(props){
  super(props)
  this.state = {page: "apply"}
  this.handleSideBarClick = this.handleSideBarClick.bind(this)
}
handleSideBarClick(e){
 this.setState({page: e})
 console.log(this.state.page)
}

  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            breakpoint="xs"
            collapsedWidth="0"
            style={{
              padding: "10px",
              background: "white",
            }}
          >
            <SideBar sideBarClick={this.handleSideBarClick}/>
          </Sider>
          <Layout>
            <Header></Header>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default LayOut;
