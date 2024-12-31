const About = () => {
    const handleClick = () => {
        window.open('src/assets/Resume.pdf');
    };
    return (
        <div className="container" id="about"> 
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div className="p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">About Me</h1>
                    <p className="lead fw-normal my-5">As a dedicated full-stack developer, I thrive on turning complex ideas into seamless digital experiences. With a passion for creating efficient and user-focused solutions, I bring a versatile skill set to every project, ensuring both front-end elegance and back-end robustness. I&apos;m committed to continuous learning, innovation, and collaboration, always aiming to deliver high-quality results that drive success. Let&apos;s connect and build something remarkable together!</p>
                    <a className="btn btn-outline-dark" onClick={handleClick}>View Resume</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>
    );
}
export default About;