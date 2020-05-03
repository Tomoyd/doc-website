import React from 'react';
import { Form, Input, Button, Checkbox ,Row,Col} from 'antd';
import "./static/css/Login.css"
const layout = {
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: {offset:0,span: 24 },
};
const Login = ({history}) => {
    const onFinish = values => {
        localStorage.setItem("isAuth",true);
        history.push("/")
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
            <div className="container" >
                <div className="login-title">
                    登录
                </div>
            <Form
                className="login-container"
            {...layout}
            name="basic"
            initialValues={{ remember: true ,layout: "vertical"}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                {...layout}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder="请输入用户名"/>
            </Form.Item>

            <Form.Item
                {...layout}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder="请输入密码" />
            </Form.Item>

            <Form.Item  {...tailLayout}  valuePropName="checked" >

                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Checkbox style={{lineHeight:"32px",float:"right"}}>记住密码</Checkbox>
            </Form.Item>
        </Form>
            </div>
    );
};
export default Login;
