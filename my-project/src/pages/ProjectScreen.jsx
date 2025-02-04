import React from "react";
import { HelpCircle, Database, Code, FileCheck } from "lucide-react";
import colors from "../colors"; // Ensure this file exists and exports the necessary colors
import { Button, Layout } from "antd";
import Sidebar from "../components/Sidebar";

const ScreenCard = ({ title, imageSrc }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
      <div className="mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover border border-gray-200"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-600 mb-2">Upload</p>
          <div className="flex gap-2 justify-center">
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
              <FileCheck size={16} />
              Validations
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
              <Code size={16} />
              Source Code
            </button>
          </div>
        </div>

        <button className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md flex items-center justify-center gap-2">
          <Database size={16} />
          Map DB
        </button>
      </div>
    </div>
  );
};

const ProjectScreen = () => {
  return (
    <Layout className="min-h-screen flex">
    <Sidebar />
    <Layout>
    <div className="min-h-screen  p-8" style={{ background: colors.MainBG }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">AP - Project Screens</h1>
          {/* <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
            <HelpCircle size={20} />
            HELP
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScreenCard
            title="Customer Screen"
            imageSrc="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
          />
          <ScreenCard
            title="Inventory Screen"
            imageSrc="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
          />
          <ScreenCard
            title="Customer Purchase"
            imageSrc="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>
    <button
            className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition duration-300 hover:shadow-xl"
            style={{ backgroundColor: colors.Color, color: colors.TextColor }}
          >
            ? HELP
          </button>
      
      </Layout>
    </Layout>
  );
};

export default ProjectScreen;
