import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Mycampaign = () => {
    const AllCampaigns = useLoaderData()
    const { user } = useContext(AuthContext)
    const MyCampaigns = AllCampaigns.filter(campaign => campaign.email === user.email);
    console.log(MyCampaigns );

    return (
        <div>

        </div>
    );
};

export default Mycampaign;