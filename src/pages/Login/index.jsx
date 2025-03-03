import { Card, message } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import logo from "@/assets/dashboard_icon.svg";
import {useDispatch} from 'react-redux'
import "./index.scss";
import { fetchLogin } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()

     const onFinish = async (values)=>{
         console.log(values)
    //     // triger async action fetchLogin
         await dispatch(fetchLogin(values))
         // jump to landing page
         navigate('/user/home')
         message.success('success')

     }
  //   const onFinish = (values) => {
  //     const hardcodedUsername = "13800000002";
  //     const hardcodedPassword = "246810";

  //     if (values.mobile === hardcodedUsername && values.code === hardcodedPassword) {
  //         message.success('Login successful');
  //         navigate('/user/home');
  //     } else {
  //         message.error('Invalid username or password');
  //     }
  // };

    const handleHomeClick = () => {
      navigate('/home'); // Navigate to the home page
    };
    
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" onClick={handleHomeClick} />
        {/* 登录表单 */} 
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please provide your username!",
              },
            ]}
          >
            <Input size="large" placeholder="username" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "Please provide your password!",
              },
            ]}
          >
            <Input size="large" type="password" placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Button className='login-button' type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
                <Button htmlType="submit" onClick={handleHomeClick} size="large" danger block>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
      </Card>
  </div>
  );
};

export default Login;