/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


const RunningCampaign = ({ Campaign }) => {
    const currentDate = new Date();
    const runningCampaigns = Campaign.filter((campaign) => new Date(campaign.deadline) > currentDate);
    console.log(runningCampaigns);
    const navigate = useNavigate();

    return (
        <div className="py-10 px-4 bg-gray-900">
            <h1 className="text-3xl font-bold text-center mb-6">Running Campaigns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {runningCampaigns.map((campaign) => (
                    <div key={campaign._id} className="bg-gray-700 shadow-md rounded-lg p-4">
                        <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
                        <p className="text-white">{campaign.description.slice(0, 100)}...</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                        </p>
                        <button
                            onClick={() => navigate(`/campaign/${campaign._id}`)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            See More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RunningCampaign;