/* eslint-disable react/prop-types */

const DonatedCampaignCard = ({ campaign }) => {
    return (
        <div className="bg-gray-800 text-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">{campaign.title}</h2>
            <p className="text-gray-300 mt-2">{campaign.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-bold">Donation Ammout: ${campaign.minDonation}</span>

            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="text-red-600 font-bold">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</span>
            </div>

        </div>
    );
};

export default DonatedCampaignCard;
