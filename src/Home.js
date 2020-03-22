import React ,{useState} from 'react';
import logo from './logo.svg';
import './static/css/Home.css';
import {Route} from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import TableComponent from "./pages/TableComponent";
const { Header, Content, Footer } = Layout;
const homepage=''
function Home(props) {
    const menuList=["表格","图表","ThreeJS"];
    const [breadcrumb,setBreadcrumb]=useState(menuList[0]);
    const menuSelect=(params)=>{
        props.history.push(params.key)
        setBreadcrumb(params.key.substring(1))
    };
    return (
        <div>
            <Layout className="layout">
                <Header className="header">
                    <div className="logo"><img src={logo} className="App-logo" alt="logo" /></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        onSelect={menuSelect}
                        defaultSelectedKeys={["./"+menuList[0]]}
                        style={{ lineHeight: '64px' }}
                    >
                        {
                            menuList.map(item=>{
                                return  <Menu.Item key={"./"+item}>{item}</Menu.Item>
                            })
                        }
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                       <Route path={`.${homepage}/`} exact component={TableComponent}/>
                       <Route path={`.${homepage}/表格`} component={TableComponent}/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>React Manage App By Tomoyd </Footer>
            </Layout>
        </div>
    );
}

export default Home;
