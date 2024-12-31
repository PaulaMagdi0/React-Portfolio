const Contact = () => {
    return (
        <div className="contact-area section-padding" id="contact">
            <div className="container">										
                <div className="section-title text-center my-5">
                    <h1>Get in Touch</h1>
                </div>					
                <div className="row">
                    <div className="col-lg-7">	
                        <div className="contact">
                            <form className="form" name="enq" method="post" action="contact.php">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                    </div>
                                    <div className="form-group col-md-12 my-1">
                                        <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                                    </div>
                                    <div className="form-group col-md-12 my-1">
                                        <textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
                                    </div>
                                    <div className="col-md-12 text-center my-2">
                                        <button type="submit" value="Send message" name="submit" className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold" title="Submit Your Message!">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 mx-3">
                        <div className="single_address">
                            <h4><i className="fas fa-map-marker-alt"></i> Our Address</h4>
                            <p>Shobra, Cairo, Egypt</p>
                        </div>
                        <div className="single_address">
                            <h4><i className="fas fa-envelope"></i> Send your message</h4>
                            <p>paulaMagdy665@gmail.com</p>
                        </div>
                        <div className="single_address">
                            <h4><i className="fas fa-phone"></i> Call us on</h4>
                            <p>(+20) 12 7776 7028</p>
                        </div>
                        <div className="single_address">
                            <h4><i className="fas fa-clock"></i> Work Time</h4>
                            <p>Sun - Thu: 08.00 - 16.00</p>
                        </div>					
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
