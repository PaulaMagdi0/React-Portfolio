const Header = () => {
    const handleClick = () => {
        window.open('src/assets/Resume.pdf');
    };

    return (
        <div className="backg vh-100">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-3">Paula Magdy</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </header>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-5 py-5">
                        <div className="col-lg-6">
                            <p className="lead">Hello, I am</p>
                            <h1 className="display-5 fw-bold lh-1 mb-3">Paula Magdy</h1>
                            <p className="lead">Full-Stack Developer</p>
                            <div id="socials-container" className="d-flex justify-content-start my-4">
                                <a className="mx-3 text-dark" href="https://www.facebook.com/elneamer.pop" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f fa-2x"></i>
                                </a>
                                <a className="mx-3 text-dark" href="https://www.linkedin.com/in/paula-magdy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in fa-2x"></i>
                                </a>
                                <a className="mx-3 text-dark" href="https://github.com/PaulaMagdi0" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold" onClick={handleClick}>Resume</button>
                                <button type="button" className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
