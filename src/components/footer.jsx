const Footer = () => {
    return(
        <div className="backg py-5 mt-5">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </footer>
                <p className="text-center text-body-secondary">© 2024 PaulaMagdy, Inc</p>
            </div>
        </div>
    );
}
export default Footer;