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
                loader:({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: '/myCampaign',
                element:  <PrivateRoute><Mycampaign></Mycampaign></PrivateRoute>,
                loader:() => fetch(`http://localhost:5000/campaign`)
            },
            {
                path: '/updateCampaign/:id',
                element:  <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: '/myDonations',
                element:  <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
                loader:() => fetch(`http://localhost:5000/newDonated`)
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