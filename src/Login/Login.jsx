import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, setUser, googleLogin, forgetPassword } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use FormData to extract input values
        const form = new FormData(e.target);

        // Debug: Print all form data
        for (const [key, value] of form.entries()) {
            console.log(`${key}: ${value}`); // Ensure the keys match your input `name` attributes
        }

        const email = form.get('email'); // Extract email value
        const password = form.get('password'); // Extract password value

        // Validate email and password
        if (!email || !password) {
            toast.error('Email or password is missing.');
            return;
        }

        // Validate password length
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters.');
            return;
        }

        // Call signIn function from AuthContext
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(location?.state ? location.state : '/');
                setUser(user);
                toast.success('Login Successfully');
            })
            .catch((error) => {
                toast.error(`Login Unsuccessful: ${error.message}`);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
                
                toast.success('Account Created Successfully');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleForgotPassword = () => {
        const email = emailRef.current.value; // Get the email from ref
        if (!email) {
            toast.error('Please enter your email to reset the password.');
            return;
        }

        forgetPassword(email)
            .then(() => {
                toast.success('Password reset email sent successfully.');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen my-5">
            <div className="card w-96 bg-gray-800 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
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
                                ref={emailRef}
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
                            <p className="text-sm py-1">
                                <a className="text-primary link cursor-pointer" onClick={handleForgotPassword}>
                                    Forgot password?
                                </a>
                            </p>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm">
                                Dont have an account?{' '}
                                <a href="/signup" className="text-primary link">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </form>
                    <button className="btn mt-4" onClick={handleGoogleLogin}>
                        <FaGoogle className="mr-2" /> Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
