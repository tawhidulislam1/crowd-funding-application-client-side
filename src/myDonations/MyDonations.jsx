import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import DonatedCampaignCard from "./DonatedCampaignCard";

const MyDonations = () => {
    const MyDonationed = useLoaderData();
    const { user } = useContext(AuthContext)
    const MyDonation = MyDonationed.filter(campaign => campaign.email === user.email);
    console.log(MyDonation);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-900 min-h-screen">
            {MyDonation.map((campaign) => (
                <DonatedCampaignCard key={campaign._id} campaign={campaign} />
            ))}
        </div>
        </div>
    );
};

export default MyDonations;