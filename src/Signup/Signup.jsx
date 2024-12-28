import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Signup = () => {
    const { createUser, setUser, updateProfiles, googleLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email);

        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
        if (!regex.test(password)) {
            toast.error(`Password requirements:\n- Must have an Uppercase letter\n- Must have a Lowercase letter\n- Must contain at least one number\n- Length must be at least 6 characters`);
            return;
        }
        console.log(email);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
console.log(user);
console.log(email);
                // Update user profile
                updateProfiles({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                        toast.success("Account Created Successfully");
                    })
                    .catch((error) => {
                        console.error("Profile Update Failed:", error);
                        toast.error("Account created, but profile update failed. Please update manually.");
                    });
            })
            .catch((error) => {
                console.error("Signup Error:", error);
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
                toast.success("Logged in with Google successfully!");
            })
            .catch((error) => {
                console.error("Google Login Error:", error);
                toast.error(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen my-5">
            <div className="card w-96 bg-gray-800 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter your Photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-4 relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <button
                                type="button"
                                className="btn btn-outline absolute right-4 top-9"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-sm">
                                Already have an account?{' '}
                                <a href="/login" className="text-primary link">
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                    <button className="btn mt-4" onClick={handleGoogleLogin}>
                        <FaGoogle className="mr-2" /> Sign Up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
