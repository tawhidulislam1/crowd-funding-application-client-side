
import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
    const allCamapaign = useLoaderData();
    return (
        <div>
            <div className="min-h-screen p-5 bg-gray-900 rounded">
                <h1 className="text-3xl font-bold text-center mb-5">All Campaigns</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Minimum Donation</th>
                                <th>Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCamapaign.map((campaign, index) => (
                                <tr key={campaign.id}>
                                    <th>{index + 1}</th>
                                    <td>{campaign.title}</td>
                                    <td>{campaign.type}</td>
                                    <td>${campaign.minDonation}</td>
                                    <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                                    <td>
                                      <Link to={`/campaign/${campaign._id}`}>
                                      <button
                                            className="btn btn-primary btn-sm"
                                        >
                                            See More
                                        </button></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;