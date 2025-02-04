import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Card, Typography, Layout, message, notification } from "antd";
import { DatabaseIcon } from "lucide-react";
import axios from "axios";
import colors from "../../colors"; // Import colors from the colorCode file
import Sidebar from "../Sidebar";

const { Title } = Typography;

function ConnectDB() {
  const [form] = Form.useForm();
  const [databaseList, setDatabaseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDB, setSelectedDB] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/databases")
      .then((response) => setDatabaseList(response.data))
      .catch(() => message.error("Failed to load database list"));
  }, []);

  // Function to show custom notifications
  const showNotification = (type, title, description) => {
    notification[type]({
      message: title,
      description: description,
      placement: "topRight", // Custom position
      duration: 4,  // Duration of the notification
      style: {
        backgroundColor: type === 'success' ? colors.NotificationSuccess : colors.NotificationError,
        color: colors.NotificationTextColor,
        fontWeight: 'bold',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'all 0.3s ease-in-out', // Smooth animation
      }
    });
  };

  const onFinish = (values) => {
    setLoading(true);
    axios.post("http://localhost:5000/connect", values)
      .then((response) => {
        if (response.data.success) {
          showNotification("success", "Connection Successful", response.data.message);

          // Reset form fields after success
          form.resetFields();

          // Optionally, refresh page after 2 seconds
          setTimeout(() => window.location.reload(), 2000);
        } else {
          showNotification("error", "Connection Failed", response.data.message);
        }
      })
      .catch(() => {
        showNotification("error", "Connection Error", "Unable to connect. Please check your credentials.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout className="min-h-screen flex" style={{ backgroundColor: colors.MainBG }}>
      <Sidebar />
      <Layout>
        <div className="min-h-screen flex justify-center items-center p-5"  style={{ backgroundColor: colors.MainBG }}>
          <Card className="w-full max-w-2xl shadow-lg" style={{ backgroundColor: colors.CardBackground }}>
            <div className="flex items-center mb-6">
              <DatabaseIcon size={24} className="mr-2" style={{ color: colors.SecondaryColor }} />
              <Title level={2} className="m-0" style={{ color: colors.TextPrimary }}>Connect to a Database</Title>
            </div>
            <p className="mb-6" style={{ color: colors.TextSecondary }}>Enter the details and submit</p>

            <Form form={form} layout="vertical" onFinish={onFinish}>
              {/* Database Type Selection */}
              <Form.Item label="Database Type" name="database" rules={[{ required: true, message: "Please select a database!" }]}>
                <Select placeholder="Select database" onChange={setSelectedDB} style={{ borderColor: colors.BorderColor }}>
                  {databaseList.map((db) => (
                    <Select.Option key={db} value={db}>{db}</Select.Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Host Field */}
              <Form.Item label="Host" name="host" rules={[{ required: true, message: "Please input the host!" }]}>
                <Input placeholder={selectedDB === "MongoDB" ? "e.g., cluster0.mongodb.net" : "Enter host address"} style={{ borderColor: colors.BorderColor }} />
              </Form.Item>

              {/* Port Field - Show only for MySQL & PostgreSQL */}
              {selectedDB !== "MongoDB" && (
                <Form.Item label="Port" name="port" rules={[{ required: true, message: "Please input the port!" }]}>
                  <Input placeholder={selectedDB === "PostgreSQL" ? "Default: 5432" : "Default: 3306"} style={{ borderColor: colors.BorderColor }} />
                </Form.Item>
              )}

              {/* Username Field */}
              <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input the username!" }]}>
                <Input placeholder="Enter username" style={{ borderColor: colors.BorderColor }} />
              </Form.Item>

              {/* Password Field */}
              <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input the password!" }]}>
                <Input.Password placeholder="Enter password" style={{ borderColor: colors.BorderColor }} />
              </Form.Item>

              {/* Database Name */}
              <Form.Item label="Database Name" name="dbName" rules={[{ required: true, message: "Please input the database name!" }]}>
                <Input placeholder="Enter database name" style={{ borderColor: colors.BorderColor }} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading} style={{ backgroundColor: colors.PrimaryColor, borderColor: colors.PrimaryColor }}>
                  CONNECT
                </Button>
              </Form.Item>
            </Form>
          </Card>

          {/* Help Button */}
          <button
                className="absolute top-2 right-2 px-3 md:px-4 py-1 md:py-2 rounded-md shadow-md hover:shadow-lg"
                style={{
                    backgroundColor: colors.Color, // Accessing the background color from colors.js
                    color: colors.TextColor // Accessing the text color from colors.js
                }}
            >
                <span className="text-xs md:text-sm">?</span> HELP
            </button>
        </div>
      </Layout>
    </Layout>
  );
}

export default ConnectDB;
