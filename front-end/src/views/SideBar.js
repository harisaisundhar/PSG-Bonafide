import React from "react";
import { Layout, Menu, Space } from "antd";
import Bonafide from "../assets/images/bonafide.png";

class SideBar extends React.Component{
    render(){
        return(
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
              alt="hello"
              src={Bonafide}
              height={180}
              width={200}
              style={{ paddingBottom: "10%" }}
            />
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['sub1']}
            style={{
              border: "none",
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              fontSize: "15px",

            }}
          ><br></br><br></br><br></br>
            <Menu.Item key = "sub1" style={{ borderRadius: "4px", background: "5853bc" }}>
              Apply For Bonafide 
            </Menu.Item><br></br>
            <Menu.Item style={{ borderRadius: "4px", background: "5853bc" }}>
              Status of Bonafide
            </Menu.Item><br></br>
            <Menu.Item style={{ borderRadius: "4px", background: "5853bc" }}>
              Approved Bonafides
            </Menu.Item>
          </Menu>
        </div>
        )
    }
}

export default SideBar;