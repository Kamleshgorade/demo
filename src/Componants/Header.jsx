// Header 123
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#87CEEB" }}>
            <div className="container-fluid">
                {/* Logo or Title */}
                <a className="navbar-brand fw-bold text-white" href="/">
                    JobPortal
                </a>

                {/* Toggle Button for Mobile View */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#jobs">
                                Jobs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
