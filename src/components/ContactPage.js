import React from 'react';

export const ContactPage = () => {
    return (
        <main id="main">
            {/* <div className="map-section">
                <iframe style={{border:0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            </div> */}
            <section id="contact" className="contact">
                <div className="container">

                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-10">
                            <div className="info-wrap">
                                <div className="row">
                                    <div className="col-lg-4 info">
                                        <i className="icofont-google-map"></i>
                                        <h4>Adresse:</h4>
                                        <p>A108 Adam Street
                                            <br/>
                                                New York, NY 535022
                                            </p>
                                    </div>
                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <i className="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com
                                            <br/>
                                            contact@example.com
                                        </p>
                                    </div>
                                    <div className="col-lg-4 info mt-4 mt-lg-0">
                                        <i className="icofont-phone"></i>
                                        <h4>Téléphone:</h4>
                                        <p>+1 5589 55488 51
                                            <br/>+1 5589 22475 14
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 justify-content-center" data-aos="fade-up">
                    <div className="col-lg-10">
                        <form action="#" method="post" role="form" className="php-email-form">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Votre nom" data-rule="minlen:3" data-msg="Votre nom doit contenir au moins 3 caractères !" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Votre adresse mail" data-rule="email" data-msg="Adresse mail invalide" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" data-rule="minlen:4" data-msg="L'objet du message doit contenir au moins 4 caractères !" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Votre message" placeholder="Message"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                    </div>

                </div>
            </section>
        </main>
    )
}