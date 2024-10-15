import SignInImage from '../../../../assets/login.jpg'
import { Button, Form, Input, Typography, notification } from 'antd';
import { NavLink } from 'react-router-dom';
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useSignInMutation } from '../../hooks/queries';  
import { SignInType } from '../../../../types'; 
import { useEffect } from 'react';

const { Title } = Typography;

const Index = () => {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    const { mutate, isError, error } = useSignInMutation<SignInType>();

    useEffect(() => {
        if (isError) {
            api.error({
                message: "Login failed",
                description: error?.message || "An error occurred during login",
            });
        }
    }, [isError, error, api]);

    const onFinish = (values: any) => {
        navigate('/admin-layout/category');

        console.log('Success:', values);

        mutate(
            { phone_number: `998${values.phone_number}`, password: values.password },
            {
                onSuccess: (data) => {
                    const access_token = data?.data?.tokens?.access_token;
                    localStorage.setItem("access_token", access_token);
                }
            }
        );
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {contextHolder}
            <div className='flex items-center gap-[200px]'>
                <div className="left">
                    <img className='w-full h-screen' src={SignInImage} alt="sign-in-image" />
                </div>
                <div className="right">
                    <Title level={2}>Login</Title>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="phone_number"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Phone number!",
                                },
                                {
                                    pattern: /^[0-9]{9}$/,
                                    message: "Please enter a valid phone number (9 digits)!",
                                },
                            ]}
                        >
                            <Input
                                addonBefore="+998"
                                maxLength={9} 
                                placeholder="Phone number"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            style={{width: "500px"}}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button 
                                style={{backgroundColor: "#BC8E5B"}} 
                                className='w-full h-10 p-3 text-white' 
                                htmlType="submit"
                                // loading={isLoading}  
                            >
                                Login
                            </Button>
                            <div className="flex gap-2 mt-2">
                                <Title level={5} style={{fontWeight: "400"}}>Do you have an account ?</Title>
                                <NavLink style={{color: "#BC8E5B"}} to="sign-up">Registrate</NavLink>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Index;
