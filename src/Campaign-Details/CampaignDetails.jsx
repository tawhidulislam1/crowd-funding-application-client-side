import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CampaignDetails = () => {
    const campains = useLoaderData();
    const {
        name,
        image,
        title,
        type,
        description,
        minDonation,
        deadline,
    } = campains;
    const handleDonation = ()=>{
        fetch('http://localhost:5000/newDonated' , {
                    method: "POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(campains)
                })
                .then(res =>res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            title: "Success!",
                            text: "Donated Successfully!",
                            icon: "success"
                          });
                    }
                    console.log(data);
                })
    }
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
                        <button onClick={handleDonation}  className="btn btn-primary mt-6 w-full md:w-auto px-8">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;