import { Fade } from "react-awesome-reveal";
import slide3 from "../../assets/slide3.jpg"
import { Typewriter } from "react-simple-typewriter";



const About = () => {
    return (
        <div className='py-5'>
            <Fade>
                <h2 className='text-4xl text-center'>About us</h2>
            </Fade>
            <div className="w-1/6 mx-auto">
                <div className="divider"></div>
            </div>
            <div className="container w-full lg:flex gap-8 items-center">
                <div className="w-full lg:w-6/12">
                    <img src={slide3} alt="" />
                </div>
                <div className="w-full lg:w-6/12">
                    <div>
                        <h2 className="font-semibold text-2xl py-1">
                            <Typewriter
                                words={[ 'Spreading Warmth, One Donation at a Time']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                    </div>


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