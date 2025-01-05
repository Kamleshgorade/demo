//footer 123

import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
    // Inline styles for social media icons
    const iconStyle = {
        fontSize: '2.5rem',  // Increased icon size
        marginRight: '15px', // Increased margin for spacing
        transition: 'transform 0.3s ease-in-out, color 0.3s ease', // Smooth transition for hover effect
    };

    return (
        <footer className="py-5 mt-5" style={{ backgroundColor: '#ced4da ' }}>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h3 className="text-info"><b>About JobPortal</b></h3>
                        <p> JobPortal is a free platform connecting job seekers with employers.
                            Find your dream job today or post job listings for free!</p>
                    </div>

                    <div className="col-md-4">
                        <h3 className="text-info"><b>Quick Links</b></h3>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-dark text-decoration-none">Home</a></li>
                            <li><a href="#jobs" className="text-dark text-decoration-none">Jobs</a></li>
                            <li><a href="#about" className="text-dark text-decoration-none">About</a></li>
                            <li><a href="#contact" className="text-dark text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-info"><b>Contact Us</b></h3>
                        <p>Email: <a href="mailto:info@jobportal.com" className="text-decoration-none">info@jobportal.com</a></p>
                        <p>Phone: +123-456-7890</p>

                        <h3 className="text-info"><b>Follow Us</b></h3>
                        <div>
                            <a href="#facebook" className="me-2" style={{ ...iconStyle, color: '#1877F2' }} aria-label="Facebook">
                                <i className="bi bi-facebook" style={iconStyle}></i>
                            </a>
                            <a href="#twitter" className="me-2" style={{ ...iconStyle, color: '#1DA1F2' }} aria-label="Twitter">
                                <i className="bi bi-twitter" style={iconStyle}></i>
                            </a>
                            <a href="#linkedin" className="me-2" style={{ ...iconStyle, color: '#0A66C2' }} aria-label="LinkedIn">
                                <i className="bi bi-linkedin" style={iconStyle}></i>
                            </a>
                            <a href="#instagram" className="me-2" style={{ ...iconStyle, background: 'linear-gradient(45deg, #E4405F, #F77737)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} aria-label="Instagram">
                                <i className="bi bi-instagram" style={iconStyle}></i>
                            </a>
                            <a href="#youtube" className="me-2" style={{ ...iconStyle, color: '#FF0000' }} aria-label="YouTube">
                                <i className="bi bi-youtube" style={iconStyle}></i>
                            </a>
                            <a href="#whatsapp" className="me-2" style={{ ...iconStyle, color: '#25D366' }} aria-label="WhatsApp">
                                <i className="bi bi-whatsapp" style={iconStyle}></i>
                            </a>
                            <a href="#telegram" className="me-2" style={{ ...iconStyle, color: '#0088cc' }} aria-label="Telegram">
                                <i className="bi bi-telegram" style={iconStyle}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <small className="text-muted">&copy; 2024 JobPortal. All Rights Reserved.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
