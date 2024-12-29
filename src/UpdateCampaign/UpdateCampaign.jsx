import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCampaign = () => {
    const { user } = useContext(AuthContext)
    const campaigns = useLoaderData();
    const { _id, image, title, type, description, minDonation, deadline} = campaigns;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = user.displayName;
        const email = user.email;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;

        // Create the campaign object
        const UpdateCampaign = {
            name,
            image,
            title,
            email,
            type,
            description,
            minDonation: parseFloat(minDonation),
            deadline,
        };

        console.log(UpdateCampaign);
        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdateCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Update Successfully!",
                        icon: "success"
                    });
                }
                console.log(data);
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-600 p-6">
            <div className="card w-full max-w-4xl text-white bg-slate-800 shadow-xl p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Campaign</h2>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image/Thumbnail (URL)</span>
                            </label>
                            <input
                                type="url"
                                name="image"
                                defaultValue={image}
                                placeholder="Enter image URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Campaign Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Campaign Title</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
                                placeholder="Enter campaign title"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Campaign Type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Campaign Type</span>
                            </label>
                            <select
                                name="type"
                                className="select select-bordered"
                                required
                            >
                                <option defaultValue={type}>{type}</option>

                                {type !== "personal" && <option value="personal">Personal Issue</option>}
                                {type !== "startup" && <option value="startup">Startup</option>}
                                {type !== "business" && <option value="business">Business</option>}
                                {type !== "creative" && <option value="creative">Creative Ideas</option>}
                            </select>

                        </div>

                        {/* Minimum Donation Amount */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Donation Amount</span>
                            </label>
                            <input
                                type="number"
                                name="minDonation"
                                defaultValue={minDonation}
                                placeholder="Enter minimum donation amount"
                                className="input input-bordered"
                                min="1"
                                required
                            />
                        </div>

                        {/* Deadline */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                defaultValue={deadline}
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                placeholder="Enter campaign description"
                                className="textarea textarea-bordered"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* User Email (Read-only) */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                className="input input-bordered bg-gray-100 text-black"
                                readOnly
                            />
                        </div>

                        {/* User Name (Read-only) */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                value={user?.displayName || ''}
                                className="input input-bordered bg-gray-100 text-black "
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;