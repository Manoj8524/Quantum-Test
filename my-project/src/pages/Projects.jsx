import React from "react";
import { HelpCircle, Github } from "lucide-react";
import colors from "../colors"; // Ensure this file exists and exports the necessary colors
import { Button, Layout } from "antd";
import Sidebar from "../components/Sidebar";

const ProjectCard = ({ title, imageSrc, uploadedImages, filesConverted, isHighlighted = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isHighlighted ? "ring-4 ring-green-600" : "" }`}>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        <div className="mb-4">
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover border border-gray-200" />
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
            View
          </button>
          <button className="flex-1 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2">
            <Github size={20} />
            Connect to GitHub
          </button>
        </div>

        <div className="flex border-t border-gray-200 pt-4">
          <div className="flex-1 border-r border-gray-200 text-center">
            <div className="text-3xl font-bold">{uploadedImages}</div>
            <div className="text-sm text-gray-600">
              Uploaded
              <br />
              Images
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold">{filesConverted}</div>
            <div className="text-sm text-gray-600">
              Files
              <br />
              Converted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (

    <Layout className="min-h-screen flex">
    <Sidebar />
    <Layout>
    <div className="min-h-screen  p-8"  style={{ background: colors.MainBG }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">List of Projects</h1>
          {/* <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
            <HelpCircle size={20} />
            HELP
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AP Calendar"
            imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
            uploadedImages={5}
            filesConverted={3}
          />
          <ProjectCard
            title="Court System"
            imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
            uploadedImages={7}
            filesConverted={5}
            isHighlighted={true}
          />
          <ProjectCard
            title="Inventory System"
            imageSrc="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80"
            uploadedImages={4}
            filesConverted={3}
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

export default Projects;
