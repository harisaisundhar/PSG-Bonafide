import React from "react";
import { Layout } from "antd";
import SideBar from "../components/SideBar";
import { Content, Header } from "antd/lib/layout/layout";
import Routes from "../routes";
import { useHistory } from "react-router";
const { Sider } = Layout;

class LayOutImplementation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSideBarClick = this.handleSideBarClick.bind(this);
  }

  handleSideBarClick(e) {
    this.props.history.push("/app/" + e);
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
            <SideBar sideBarClick={this.handleSideBarClick} />
          </Sider>
          <Layout>
            <Header style={{ background: "white" }}>hello</Header>
            <Content>
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default function LayOut() {
  const history = useHistory();
  return <LayOutImplementation history={history} />;
}
