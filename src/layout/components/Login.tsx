import React, { useState } from "react";
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from "@ant-design/icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import {Divider, message, Space, Tabs } from "antd";
import type { CSSProperties } from "react";
import { useLoginStore } from "@stores/index";

type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "18px",
  verticalAlign: "middle",
  cursor: "pointer",
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  const { setUserInfo } = useLoginStore();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    return delay(1000).then(() => {
      message.success("Login successful 🎉🎉🎉");
      setUserInfo(values);
      navigate("/", { replace: true });
    });
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        onFinish={onFinish as any}
        title="AdminSphere"
        subTitle="A lightweight React admin dashboard"
          submitter={{
    searchConfig: {
      submitText: "Login",
    },
  }}
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Divider plain>
              <span
                style={{ color: "#CCC", fontWeight: "normal", fontSize: 14 }}
              >
                Other sign-in methods
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
        <i className="fab fa-google" style={{ ...iconStyles, color: "#DB4437" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: 40,
          width: 40,
          border: "1px solid #D4D8DD",
          borderRadius: "50%",
        }}
      >
        <i className="fab fa-facebook-f" style={{ ...iconStyles, color: "#1877F2" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: 40,
          width: 40,
          border: "1px solid #D4D8DD",
          borderRadius: "50%",
        }}
      >
                 <i className="fab fa-microsoft" style={{ ...iconStyles, color: "#00A4EF" }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={"account"} tab={"Account Login"} />
          <Tabs.TabPane key={"phone"} tab={"Phone Login"} />
        </Tabs>
        {loginType === "account" && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              placeholder={"Username: admin or user"}
              rules={[
                {
                  required: true,
                  message: "Please enter your username!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"Password: 123456"}
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <MobileOutlined className={"prefixIcon"} />,
              }}
              name="mobile"
              placeholder={"Mobile number"}
              rules={[
                {
                  required: true,
                  message: "Please enter your mobile number!",
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "Invalid mobile number format!",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder={"Please enter the verification code"}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} s`;
                }
                return "Get code";
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "Please enter the verification code!",
                },
              ]}
              onGetCaptcha={async () => {
                message.success("Verification code sent! The code is: 1234");
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            Remember me
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            Forgot password
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default Login;
