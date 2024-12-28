import slide3 from "../../assets/slide3.jpg"


const About = () => {
    return (
        <div className='py-5'>
            <h2 className='text-4xl text-center'>About us</h2>
            <div className="w-1/6 mx-auto">
                <div className="divider"></div>
            </div>
            <div className="container w-full lg:flex gap-8 items-center">
                <div className="w-full lg:w-6/12">
                    <img src={slide3} alt="" />
                </div>
                <div className="w-full lg:w-6/12">
                    <h2 className='font-semibold text-2xl py-1'>Spreading Warmth, One Donation at a Time</h2>
                    <p>At Crowdcube, we believe in the power of community to bring ideas to life. Whether you have a creative vision, a personal cause, or an entrepreneurial dream, our platform is here to help you raise the funds you need to make it a reality.
                    <br></br>
                        We connect individuals, startups, and organizations with a global network of backers who are eager to support innovative projects, causes, and personal needs. Our goal is to empower people everywhere to fund their passions, build businesses, and contribute to meaningful change.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;