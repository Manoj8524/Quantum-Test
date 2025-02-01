import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../colors"; // Ensure this file exists and exports the necessary colors
import { Button, Layout } from "antd";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar component exists
import {
  UploadOutlined,
  DatabaseOutlined,
  CodeOutlined,
  PaperClipOutlined,
  AudioOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const UI = () => {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen flex">
      <Sidebar />
      <Layout>
        <Content
          className="flex flex-col items-center justify-center min-h-screen p-8"
          style={{ background: colors.MainBG }}
        >
          <div className="text-center mb-8">
            <h1
              className="text-5xl font-extrabold relative inline-block"
              style={{ color: colors.primary }}
            >
              Welcome to Code Creation
              <span
                className="block h-1 w-16 mx-auto mt-2 rounded"
                style={{ background: colors.primary }}
              ></span>
            </h1>
            <p className="mt-2 text-lg" style={{ color: colors.textSecondary }}>
              Unlock Creativity: Generate Code with AI
            </p>
          </div>

          <div className="w-full max-w-4xl shadow-xl rounded-lg p-8" style={{ background: colors.containercolor }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: <UploadOutlined />, text: "Upload Images", action: () => navigate('/UploadImage') },
                { icon: <DatabaseOutlined />, text: "Database Connections", action: () => navigate('/ConnectDB') },
                { icon: <CodeOutlined />, text: "Explore Samples", action: () => alert('Explore Samples clicked') }
              ].map((item, index) => (
                <button
                  key={index}
                  className="p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105"
                  style={{ background: colors.background2, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
                  onClick={item.action}
                >
                  {React.cloneElement(item.icon, { style: { fontSize: '2.5rem', color: colors.primary } })}
                  <p className="mt-2 text-lg font-medium" style={{ color: colors.textPrimary }}>{item.text}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 border rounded-lg flex items-center justify-between" style={{ borderColor: colors.textSecondary }}>
              <p className="text-base" style={{ color: colors.textSecondary }}>
                Type or Select a button to get started
              </p>
              <div className="flex gap-3">
                <Button icon={<PaperClipOutlined />} className="p-2 rounded-lg shadow-md" style={{ background: colors.DashButton, color: "white" }} />
                <Button icon={<AudioOutlined />} className="p-2 rounded-lg shadow-md" style={{ background: colors.DashButton, color: "white" }} />
              </div>
            </div>
          </div>

          <button
            className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition duration-300 hover:shadow-xl"
            style={{ backgroundColor: colors.Color, color: colors.TextColor }}
          >
            ? HELP
          </button>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UI;