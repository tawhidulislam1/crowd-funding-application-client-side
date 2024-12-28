import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
    const campains = useLoaderData();
    const {
        name,
        image,
        title,
        type,
        email,
        description,
        minDonation,
        deadline,
    } = campains;
    console.log(campains);
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card w-full max-w-4xl text-white bg-slate-600 shadow-lg rounded-lg p-8">
                {/* Campaign Image */}
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={image}
                        alt="Campaign Thumbnail"
                        className="w-full md:w-1/2 rounded-lg shadow-md mb-6 md:mb-0"
                    />

                    {/* Campaign Details */}
                    <div className="md:ml-8 flex-1">
                        <h2 className="text-2xl font-bold text-white">{title}e</h2>
                        <p className="text-sm text-white mt-2">Type: {type}</p>
                        <p className="mt-4 text-gray-100 leading-relaxed">
                            {description}
                        </p>
                        <p className="mt-2 text-white">
                            <strong>Minimum Donation:</strong> ${minDonation}
                        </p>
                        <p className="mt-2 text-white">
                            <strong>Deadline:</strong> {deadline}
                        </p>
                        <p className="mt-2 text-white">
                            <strong>Added By:</strong> {name}
                        </p>

                        {/* Donate Button */}
                        <button className="btn btn-primary mt-6 w-full md:w-auto px-8">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;