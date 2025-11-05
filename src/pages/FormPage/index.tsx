import type { CascaderProps } from "antd";
import { ProCard } from "@ant-design/pro-components";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import React, { useState } from "react";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>["options"] = [
  {
    value: "gauteng",
    label: "Gauteng",
    children: [
      {
        value: "johannesburg",
        label: "Johannesburg",
      },
    ],
  },
  {
    value: "western_cape",
    label: "Western Cape",
    children: [
      {
        value: "cape_town",
        label: "Cape Town",
      },
    ],
  },
  {
    value: "kwazulu_natal",
    label: "KwaZulu-Natal",
    children: [
      {
        value: "durban",
        label: "Durban",
      },
    ],
  },
  {
    value: "eastern_cape",
    label: "Eastern Cape",
    children: [
      {
        value: "bhisho",
        label: "Bhisho",
      },
    ],
  },
  {
    value: "northern_cape",
    label: "Northern Cape",
    children: [
      {
        value: "kimberley",
        label: "Kimberley",
      },
    ],
  },
  {
    value: "free_state",
    label: "Free State",
    children: [
      {
        value: "bloemfontein",
        label: "Bloemfontein",
      },
    ],
  },
  {
    value: "mpumalanga",
    label: "Mpumalanga",
    children: [
      {
        value: "mbombela",
        label: "Mbombela",
      },
    ],
  },
  {
    value: "limpopo",
    label: "Limpopo",
    children: [
      {
        value: "polokwane",
        label: "Polokwane",
      },
    ],
  },
  {
    value: "north_west",
    label: "North West",
    children: [
      {
        value: "mahikeng",
        label: "Mahikeng",
      },
    ],
  },
];


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="27">+27</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 90 }}>
        <Option value="ZAR">R (ZAR)</Option>
        <Option value="USD">$ (USD)</Option>
        <Option value="CNY">¥ (CNY)</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".co.za"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <ProCard layout="center">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["Gauteng", "Johannesburg"],
          prefix: "27",
        }}
        style={{ maxWidth: 600, margin: "auto" }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not a valid e-mail address!",
            },
            {
              required: true,
              message: "Please enter your e-mail address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What would you like others to call you?"
          rules={[
            {
              required: true,
              message: "Please enter your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="residence"
          label="Residential Address"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select your residential address!",
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="donation"
          label="Donation Amount"
          rules={[{ required: true, message: "Please enter donation amount!" }]}
        >
          <InputNumber addonAfter={suffixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: "Please enter your website!" }]}
        >
          <AutoComplete
            options={websiteOptions}
            onChange={onWebsiteChange}
            placeholder="website"
          >
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name="intro"
          label="About You"
          rules={[{ required: true, message: "Please tell us a bit about yourself" }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Select placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Captcha"
          extra="Checking if you're a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please enter the captcha code!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must accept the terms and conditions")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">terms and conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </ProCard>
  );
};

export default FormPage;
