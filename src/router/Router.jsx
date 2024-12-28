import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import NewCampine from "../NewCamping/NewCampine";
import PrivateRoute from "./PrivateRoute";
import AllCampaign from "../AllCampaign/AllCampaign";
import CampaignDetails from "../Campaign-Details/CampaignDetails";

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
                path: 'all-campaign',
                element: <AllCampaign></AllCampaign>,
                loader:() => fetch(`http://localhost:5000/campaign`)
            },
            {
                path: 'addCampaign',
                element: <PrivateRoute><NewCampine></NewCampine></PrivateRoute>
            },
            {
                path: '/campaign/:id',
                element:  <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/${params.id}`)
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