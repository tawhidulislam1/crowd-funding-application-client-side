import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import NewCampine from "../NewCamping/NewCampine";
import PrivateRoute from "./PrivateRoute";
import AllCampaign from "../AllCampaign/AllCampaign";
import CampaignDetails from "../Campaign-Details/CampaignDetails";
import Mycampaign from "../MyCampaign/Mycampaign";
import UpdateCampaign from "../UpdateCampaign/UpdateCampaign";
import MyDonations from "../myDonations/MyDonations";
import Error from "../Error/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch(`https://serve-side-alpha.vercel.app/campaign`)
            },
            {
                path: 'all-campaign',
                element: <AllCampaign></AllCampaign>,
                loader:() => fetch(`https://serve-side-alpha.vercel.app/campaign`)
            },
            {
                path: 'addCampaign',
                element: <PrivateRoute><NewCampine></NewCampine></PrivateRoute>
            },
            {
                path: '/campaign/:id',
                element:  <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
                loader:({params}) => fetch(`https://serve-side-alpha.vercel.app/campaign/${params.id}`)
            },
            {
                path: '/myCampaign',
                element:  <PrivateRoute><Mycampaign></Mycampaign></PrivateRoute>,
                loader:() => fetch(`https://serve-side-alpha.vercel.app/campaign`)
            },
            {
                path: '/updateCampaign/:id',
                element:  <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader:({params}) => fetch(`https://serve-side-alpha.vercel.app/campaign/${params.id}`)
            },
            {
                path: '/myDonations',
                element:  <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
                loader:() => fetch(`https://serve-side-alpha.vercel.app/newDonated`)
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
        element: <Error></Error>,
    },
]);
export default Router;