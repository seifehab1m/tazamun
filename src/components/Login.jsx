"use client";
import { useAuth } from "@/contexts/authContext";
import { loginAction } from "@/mutation/serverActions";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const onFinish = async (value) => {
    const res = await loginAction(value);
    if (res) {
      login(res?.data?.email);
      router.push("/dashboard");
    } else {
      message.error("please check your email or password");
    }
  };

  return (
    <div className="bg-white flex items-center justify-center w-full shadow-lg h-full rounded-lg">
      <Form
        className="pt-12"
        name="register"
        layout="vertical"
        onFinish={onFinish}
        style={{
          width: "400px",
          margin: "0 auto",
        }}
      >
        <Form.Item
          name="email"
          label={"Email" + "*"}
          required={false}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label={"Password" + "*"}
          required={false}
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 6, message: "Must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item className="mt-9">
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
