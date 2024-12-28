
import { Link, NavLink } from "react-router-dom";
import  { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
console.log(user);
    // console.log(user);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='donation'>All Campaign</NavLink></li>
        <li><NavLink to='new-campaign'>Add New Campaign</NavLink></li>
        <li><NavLink to='dashboard'>My  Campaign</NavLink></li>
        <li><NavLink to='dashboard'>My Donations</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Crowd Funding</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ? <>
                        <button onClick={logOut} className="btn">Logout</button>
                        <NavLink to='/dashboard'> <img src={user?.photoURL} alt="" className="rounded-full w-14 ml-2" /></NavLink>


                    </> : <NavLink to='/login' className="btn">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;