import React from 'react';
import { Form, Input, Select, Button, Card, Typography,Layout } from 'antd';
import { DatabaseIcon } from 'lucide-react';
import colors from "../../colors";
import Sidebar from "../Sidebar";

const { Title } = Typography;

function ConnectDB() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (

    <Layout className="min-h-screen flex">
      <Sidebar />
      <Layout>
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <Card style={{ width: '100%', maxWidth: 500 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <DatabaseIcon size={24} style={{ marginRight: 8 }} />
          <Title level={2} style={{ margin: 0 }}>Connect to a Database</Title>
        </div>
        <p style={{ marginBottom: 24 }}>Enter the details and submit</p>
        
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Host"
            name="host"
            rules={[{ required: true, message: 'Please input the host!' }]}
          >
            <Input placeholder="Enter host address" />
          </Form.Item>

          <Form.Item
            label="Port"
            name="port"
            rules={[{ required: true, message: 'Please input the port!' }]}
          >
            <Input placeholder="Enter port number" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input the username!' }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Database"
            name="database"
            rules={[{ required: true, message: 'Please select the database!' }]}
          >
            <Select placeholder="Select database">
              <Select.Option value="mysql">MySQL</Select.Option>
              <Select.Option value="postgresql">PostgreSQL</Select.Option>
              <Select.Option value="mongodb">MongoDB</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              SUBMIT
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <button
            className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition duration-300 hover:shadow-xl"
            style={{ backgroundColor: colors.Color, color: colors.TextColor }}
          >
            ? HELP
          </button>
    </div>

    </Layout>
    </Layout>
    
  );
}

export default ConnectDB;