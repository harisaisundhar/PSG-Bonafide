import React from "react";
import { Layout} from "antd";

import SideBar from "../components/SideBar";
import Status from "../components/Status"
import { Content, Header } from "antd/lib/layout/layout";

const { Sider } = Layout;
class LayOut extends React.Component {
constructor(props){
  super(props)
  this.state = {page: "apply"}
  this.handleSideBarClick = this.handleSideBarClick.bind(this)
}
handleSideBarClick(e){
 this.setState({page: e})
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
            <Header style={{background: "white"}}>{this.state.page}</Header>

            <Content><Status /></Content>
          </Layout>

        </Layout>
      </div>
    );
  }
}

export default LayOut;
