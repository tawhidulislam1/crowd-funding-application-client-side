import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Mycampaign = () => {
    const AllCampaigns = useLoaderData()
    const { user } = useContext(AuthContext)
    const MyCampaigns = AllCampaigns.filter(campaign => campaign.email === user.email);
    const [campaigns, setCampaign] = useState(MyCampaigns)
    console.log(MyCampaigns);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/campaign/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaning = MyCampaigns.filter(cof => cof._id !== _id);
                            setCampaign(remaning)
                        }
                    })
            }
        });
    }
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
                            {campaigns.map((campaign, index) => (
                                <tr key={campaign._id}>
                                    <th>{index + 1}</th>
                                    <td>{campaign.title}</td>
                                    <td>{campaign.type}</td>
                                    <td>${campaign.minDonation}</td>
                                    <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            onClick={()=>handleDelete(campaign._id)}
                                            className="btn btn-primary btn-sm"
                                        >
                                            Delete
                                        </button>
                                        <Link  to={`/updateCampaign/${campaign._id}`}
                                            className="btn btn-primary btn-sm"
                                        >
                                            Update
                                        </Link>
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

export default Mycampaign;