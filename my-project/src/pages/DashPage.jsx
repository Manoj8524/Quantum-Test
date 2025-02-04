import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../colors';  // Import all colors
import pramanaImage from '../assets/Q.png';

const DashPage = () => {
    const [selectedAgent, setSelectedAgent] = useState(null);
    const navigate = useNavigate();

    const handleAgentClick = (agent) => {
        setSelectedAgent(agent);

        // Navigate to "/ui" if "UI Creation" is clicked
        if (agent === 'UI Creation') {
            navigate('/ui');
        }
    };

    return (
        <div style={{ backgroundColor: colors.MainBG }} className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-7xl h-auto md:h-[85vh] flex flex-col items-center relative">
                {/* HELP Button */}
                {/* <button 
                    style={{ backgroundColor: colors.accent }} 
                    className="absolute top-2 right-2 px-3 md:px-4 py-1 md:py-2 rounded-md text-gray-600 text-xs md:text-sm"
                >
                    <span className="text-xs md:text-sm">?</span> HELP
                </button> */}

                {/* Logo and Quantum */}
                <div className="w-full flex flex-col items-center absolute top-16 md:top-24">
                    <div className="flex items-center">
                        <img src={pramanaImage} alt="PRAMANA Logo" className="w-10 md:w-14" />
                        <h2 className="text-3xl md:text-5xl font-bold ml-2" style={{ color: colors.primary }}>
                            Quantum
                        </h2>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center mt-24 md:mt-36 text-center">
                    <h1 className="text-xl md:text-3xl font-bold" style={{ color: colors.primary }}>
                        Transform Data. Reinvent Code. Elevate UI.
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Click on the button to get things started.
                    </p>
                </div>

                {/* Button Grid */}
                <div className="w-full px-4 mt-32 md:mt-24 flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {['Data Transformation', 'Code Migration', 'UI Creation'].map((agent) => (
                            <button
                                key={agent}
                                onClick={() => handleAgentClick(agent)}
                                className={`px-4 py-8 rounded-md text-white font-bold w-full md:w-auto max-w-xs transition-all duration-300 
                                shadow-md hover:shadow-xl hover:shadow-[rgba(0,0,0,0.3)] 
                                ${selectedAgent === agent ? 'scale-105' : 'scale-100'}`}
                                style={{
                                    backgroundColor: selectedAgent === agent ? colors.secondary : colors.DashButton,
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: 'clamp(14px, 1vw, 18px)',
                                    lineHeight: '1.5',
                                    borderRadius: '4px',
                                    marginBottom: '10px',
                                }}
                            >
                                {agent}
                                <br /> Agent
                            </button>
                        ))}
                    </div>
                </div>
            </div>
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
    );
};

export default DashPage;
