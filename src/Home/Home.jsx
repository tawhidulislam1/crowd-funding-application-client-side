import { useLoaderData } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import HowtoWork from "./Components/HowtoWork";
import RunningCampaign from "./Components/RunningCampaign";


const Home = () => {
    const Campaign = useLoaderData()
    return (
        <div>
            <Header></Header>
            <About></About>
            <RunningCampaign Campaign={Campaign}></RunningCampaign>
            <HowtoWork></HowtoWork>
        </div>
    );
};

export default Home;