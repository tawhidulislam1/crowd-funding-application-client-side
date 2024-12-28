import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import NewCampine from "../NewCamping/NewCampine";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'new-campaign',
                element: <NewCampine></NewCampine>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },

        ]
    },
    {
        path: "*",
        // element: <Error></Error>,
    },
]);
export default Router;