import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <h3 className="footer-title">Contact Information</h3>
                <p>Address: 3900Feni Bangladesh</p>
                <p>Email: designwithtawhid@gmail.com</p>
                <p>Phone: +8801878-457216</p>
            </div>

            <div>
                <h3 className="footer-title">Follow Us</h3>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                       <FaTwitter/>
                    </a>
                </div>
            </div>
            <div>
                <h3 className="footer-title">© 2024 Winter Donation</h3>
                <p>All rights reserved.</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;