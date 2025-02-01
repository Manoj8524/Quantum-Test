import { useState } from "react";
import { Tabs, Input, Select, Checkbox, Button, Layout, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Sidebar from "../Sidebar";
import colors from "../../colors";

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const UploadImage = () => {
  const [selectedDatabases, setSelectedDatabases] = useState([]);

  const handleDatabaseChange = (values) => {
    setSelectedDatabases(values);
  };

  return (
    <Layout className="min-h-screen flex">
      <Sidebar />
      <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-6xl w-full min-h-[80vh] p-10 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Project / Upload Images</h2>

        <Tabs defaultActiveKey="1" centered>
          {/* Project Details */}
          <TabPane tab={<span className="font-bold text-lg">Details</span>} key="1">
            <div className="space-y-6">
              <label className="block font-semibold">Project Name</label>
              <Input placeholder="Enter project name" size="large" />

              <label className="block font-semibold">Description</label>
              <TextArea rows={5} placeholder="Enter project description" />

              <label className="block font-semibold">Database</label>
              <Select
                mode="multiple"
                placeholder="Select"
                className="w-full"
                onChange={handleDatabaseChange}
                value={selectedDatabases}
                size="large"
              >
                <Option value="Oracle">
                  <Checkbox checked={selectedDatabases.includes("Oracle")} /> Oracle
                </Option>
                <Option value="Sybase">
                  <Checkbox checked={selectedDatabases.includes("Sybase")} /> Sybase
                </Option>
              </Select>

              <Button type="primary" className="w-full py-2 text-lg">Next</Button>
            </div>
          </TabPane>

          {/* Upload Images */}
          <TabPane tab={<span className="font-bold text-lg">Upload Images</span>} key="2">
            <div className="p-6">
              <div className="flex justify-center gap-4 mb-6">
                <Button size="large">My Files</Button>
                <Button size="large">Web URL</Button>
                <Button size="large">Google Drive</Button>
              </div>
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined className="text-4xl text-blue-500" />
                </p>
                <p className="ant-upload-text text-lg">Drag and Drop assets here</p>
                <p className="ant-upload-hint text-gray-500">Or</p>
                <Button type="default" size="large">Browse</Button>
              </Dragger>
              <Button type="primary" className="mt-6 w-full py-2 text-lg">Finish</Button>
            </div>
          </TabPane>
        </Tabs>

        {/* Help Button */}
        <button
            className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition duration-300 hover:shadow-xl"
            style={{ backgroundColor: colors.Color, color: colors.TextColor }}
          >
            ? HELP
          </button>
      </div>
    </div>
      </Layout>
    </Layout>
  );
};

export default UploadImage;
