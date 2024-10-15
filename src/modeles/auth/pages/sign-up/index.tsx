import React from "react";
import { Button, Form, Grid, Input, theme, Typography, notification } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../hooks/queries"; 
import { SignUpType } from "../../../../types"; 

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function SignUpPage() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const { mutate, isError, error } = useSignUpMutation<SignUpType>();

  const [api, contextHolder] = notification.useNotification();

  React.useEffect(() => {
    if (isError) {
      api.error({
        message: "Sign-up failed",
        description: error?.message || "An error occurred during sign-up",
      });
    }
  }, [isError, error, api]);

  const handleSubmit = (values: SignUpType) => {
    window.localStorage.setItem("first_name", values.first_name);
    window.localStorage.setItem("last_name", values.last_name);
    window.localStorage.setItem("phone_number", values.phone_number);
    window.localStorage.setItem("email", values.email);
    window.localStorage.setItem("password", values.password);

    mutate(
      { ...values, phone_number: `998${values.phone_number}` },
      {
        onSuccess: (response) => {
          if (response.status === 201) {
            const access_token = response.data?.data?.tokens?.access_token;
            localStorage.setItem("access_token", access_token);
            navigate("/admin-layout/category");
          } else {
            api.error({
              message: "Error",
              description: "Password or Name is incorrect.",
            });
          }
        },
        onError: (err) => {
          console.log(err);
          api.error({
            message: "Error",
            description: "Something went wrong, please try again.",
          });
        },
      }
    );
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      {contextHolder}
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>Join us! Create an account to get started.</Text>
        </div>
        <Form name="normal_signup" onFinish={handleSubmit} layout="vertical" requiredMark="optional">
          <Form.Item
            name="first_name"
            rules={[{ required: true, message: "Please input your first name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="last_name"
            rules={[{ required: true, message: "Please input your last name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="phone_number"
            rules={[
              { required: true, message: "Please input your phone number!" },
              { pattern: /^[0-9]{9}$/, message: "Please enter a valid phone number (9 digits)!" },
            ]}
          >
            <Input addonBefore="+998" maxLength={9} placeholder="Phone number" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email address" />
          </Form.Item>
          <Form.Item
            name="password"
            extra="Password needs to be at least 8 characters."
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button
              block
              style={{ backgroundColor: "#BC8E5B" }}
              className="text-white"
              htmlType="submit"
            >
              Sign up
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link style={{ color: "#BC8E5B" }} href="/">
                Sign in
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
