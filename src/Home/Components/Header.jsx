import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"


const Header = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={slide1}
                    alt="Winter Clothing Drive"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute bottom-10 left-10 bg-opacity-75 bg-gray-800 text-white p-5 rounded-lg">
                    <h2 className="text-3xl font-bold">Join Our Winter Clothing Drive</h2>
                    <p className="mt-2">Help keep everyone warm this winter season.</p>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={slide2}
                    alt="Donate Clothes"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute bottom-10 left-10 bg-opacity-75 bg-gray-800 text-white p-5 rounded-lg">
                    <h2 className="text-3xl font-bold">Donate Warm Clothes</h2>
                    <p className="mt-2">Your donation makes a difference for those in need.</p>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={slide3}
                    alt="Winter Blanket Distribution"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
                <div className="absolute bottom-10 left-10 bg-opacity-75 bg-gray-800 text-white p-5 rounded-lg">
                    <h2 className="text-3xl font-bold">Spread Warmth with Blankets</h2>
                    <p className="mt-2">Join us in distributing winter essentials.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;