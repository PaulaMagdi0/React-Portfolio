const Projects = () => {
    return (
        <div className="container px-4 py-5" id="projects">
            <h1 className="display-4 fw-bold fw-normal text-center mb-5">Projects</h1>
            <div className="row g-4 my-5">
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                        <img 
                            src="src/assets/project-1.png" 
                            className="card-img-top img-fluid project-image" 
                            alt="E-Commerce Site" 
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center text-dark fw-bold">E-Commerce Shopping</h5>
                            <p className="card-text text-muted text-center">
                                An e-commerce website for a clothing store featuring a product catalog and shopping cart. Built with HTML, CSS, JavaScript, and React, it&apos;s fully responsive for seamless user experience.
                            </p>
                        </div>
                        <a 
                            href="https://peaceful-praline-2d4d8e.netlify.app/" 
                            className="btn btn-outline-dark mt-auto mx-3 mb-3"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Visit the Website
                        </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                        <img 
                            src="src/assets/project-2.png" 
                            className="card-img-top img-fluid project-image" 
                            alt="Gericht Restaurant" 
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center text-dark fw-bold">Gericht Restaurant</h5>
                            <p className="card-text text-muted text-center">
                                A restaurant website offering a simple way to explore menus and book tables. Built with HTML, CSS, JavaScript, and React for responsive functionality.
                            </p>
                        </div>
                        <a 
                            href="https://dapper-malasada-ccc5e9.netlify.app/" 
                            className="btn btn-outline-dark mt-auto mx-3 mb-3"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Visit the Website
                        </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                        <img 
                            src="src/assets/project-3.png" 
                            className="card-img-top img-fluid project-image" 
                            alt="Portfolio" 
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center text-dark fw-bold">Portfolio</h5>
                            <p className="card-text text-muted text-center">
                                A showcase of web development projects, highlighting proficiency in both front-end and back-end technologies.
                            </p>
                        </div>
                        <a 
                            href="https://portfolio-ploz.vercel.app/" 
                            className="btn btn-outline-dark mt-auto mx-3 mb-3"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Visit the Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;