import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashPage from './pages/DashPage';
import UI from './pages/UI';
import ConnectDB from "./components/UI/ConnectDB";
import UploadImage from './components/UI/Uploadimage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashPage />} />
        <Route path="/ui" element={<UI />} />
        <Route path="/ConnectDB" element={<ConnectDB />} />
        <Route path="/UploadImage" element={<UploadImage />} /> {/* Corrected here */}
        {/* <Route path="/DashPage" element={} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;