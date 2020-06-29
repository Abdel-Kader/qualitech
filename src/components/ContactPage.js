import React from 'react';
import ContactForm from "./ContactForm";

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
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
            <br/><br/>
        </main>
    )
}
