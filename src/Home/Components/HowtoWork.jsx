import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"

const HowtoWork = () => {
    return (
        <div>
            <h2 className='text-4xl text-center'>How It Works</h2>
            <div className="w-1/6 mx-auto">
                <div className="divider"></div>
            </div>
            <div className='lg:flex py-5 gap-5 items-center justify-center'>
                <div className='w-full lg:w-4/12'>
                    <img src={slide2} alt="" />
                </div>
                <div className='w-full lg:w-8/12'>
                    <h3 className='text-3xl py-1'>For Donation</h3>
                    <p> Help us spread warmth this winter by donating warm clothes to those
                        in need. Your kindness can make a difference!</p>
                </div>
            </div>
            <div className='lg:flex py-5 gap-5 items-center'>
                <div className='w-full lg:w-8/12'>
                    <h3 className='text-3xl py-1'>Our Clothings Reciver Point  </h3>
                    <p>Contact With Us For doante for Clothe and others thighs that you have to donate. you can donate you clothe which you not use many days </p>
                </div>
                <div className='w-full lg:w-4/12'>
                    <img src={slide1} alt="" />
                </div>
            </div>
        </div>

    );
};

export default HowtoWork;