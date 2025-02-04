

import React, { useState } from 'react';
import { ChevronRight, Code, MessageSquare, Upload } from 'lucide-react';
import colors from "../../colors"; // Ensure this file exists and exports the necessary colors
import Sidebar from "../Sidebar";
import { Layout } from "antd";

const CustomerScreen = () => {
  const [selectedTab, setSelectedTab] = useState('code');
  const [screenshot, setScreenshot] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleScreenshotChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (
    <Layout className="min-h-screen flex">
         <Sidebar />
    <Layout>
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">AP - Customer Screen</h1>
        <button className="bg-green-600 text-white px-6 py-2 rounded">Save</button>
      </header>

      <div className="flex-1 grid grid-cols-2 gap-4 p-4" style={{ backgroundColor: colors.MainBG }}>
        <div className="border rounded-lg p-4">
          <img 
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
            alt="Code Editor"
            className="w-full h-auto rounded"
          />
          <div className="mt-4 space-y-2">
            <h2 className="text-lg font-semibold">Create customer page</h2>
            <div className="space-y-1 text-sm">
              <div>src/App.tsx</div>
              <div>Create Initial Files</div>
              <div>Install Dependencies</div>
              <div>npm run dev</div>
            </div>
            <div className="mt-4 text-sm">
              I've created a modern and professional page with the following features:
              <ul className="mt-2 space-y-1 text-sm">
                <li>Clean, minimalist design with a subtle gradient background</li>
                <li>Card layout with shadow for depth</li>
                <li>Branded lock icon header</li>
                <li>Email input with mail icon</li>
                <li>Password input</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border rounded-lg flex flex-col">
          <div className="flex items-center border-b px-4 py-2 bg-gray-50">
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <div className="flex space-x-4 ml-2">
              {['preview', 'code', 'console'].map((tab) => (
                <button 
                  key={tab}
                  className={`flex items-center space-x-2 px-3 py-1 ${selectedTab === tab ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab === 'preview' && <Layout className="w-4 h-4" />}
                  {tab === 'code' && <Code className="w-4 h-4" />}
                  {tab === 'console' && <MessageSquare className="w-4 h-4" />}
                  <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4 font-mono text-sm overflow-auto bg-white">
            <div className="text-gray-500">ui-screenshot-input.tsx</div>
            <div className="mt-4 space-y-1">
              <div className="flex"><span className="text-gray-400 w-8">105</span><span className="text-green-600">&lt;label</span></div>
              <div className="flex"><span className="text-gray-400 w-8">106</span><span className="ml-8">htmlFor="screenshot"</span></div>
              <div className="flex"><span className="text-gray-400 w-8">107</span><span className="ml-8">className="flex flex-col items-center gap-2 cursor-pointer"</span></div>
              <div className="flex"><span className="text-gray-400 w-8">108</span><span className="ml-4">&gt;</span></div>
              <div className="flex"><span className="text-gray-400 w-8">109</span><span className="ml-8 text-green-600">&lt;Upload</span><span> className="w-8 h-8 text-muted-foreground" /&gt;</span></div>
              <div className="flex"><span className="text-gray-400 w-8">110</span><span className="ml-8 text-green-600">&lt;span</span><span> className="text-sm text-muted-foreground"&gt;</span></div>
              <div className="flex"><span className="text-gray-400 w-8">111</span><span className="ml-12">Click to upload a screenshot</span></div>
              <div className="flex"><span className="text-gray-400 w-8">112</span><span className="ml-8 text-green-600">&lt;/span&gt;</span></div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 p-4 border-t">
            <button className="px-4 py-1.5 bg-black text-white rounded">Deploy</button>
          </div>
        </div>
      </div>
    </div>
      {/* <button
                  className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition duration-300 hover:shadow-xl"
                   style={{ backgroundColor: colors.Color, color: colors.TextColor }}
              >
                ? HELP
               </button> */}
            
          </Layout>
         </Layout>
    
  );
};

export default CustomerScreen;
