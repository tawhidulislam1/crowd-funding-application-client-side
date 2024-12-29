
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-2 text-center">
            Sorry, the page you are looking for doesnt exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary bg-blue-600 hover:bg-blue-500 text-white mt-6 px-8 py-3 rounded-lg">
            Go Back Home
        </Link>
    </div>
    );
};

export default Error;