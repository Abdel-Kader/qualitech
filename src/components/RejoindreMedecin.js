import React from 'react';
import ContactForm from "./ContactForm";
export const RejoindreMedecin = () => {
    return (
        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className="col-lg-12 text-center text-lg-center">
                        <p>Rejoignez nous et faites partie de l'aventure</p>
                    </div>
                    <div className="row mt-5 justify-content-center" data-aos="fade-up">
                        <div className="col-lg-10">
                            <form action="#" method="post" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nom et prénom" data-rule="minlen:3" data-msg="Votre nom doit contenir au moins 3 caractères !" />
                                        <div className="validate"/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="telephone" id="telephone" placeholder="Numéro de téléphone" data-rule="minlen:4" data-msg="L'objet du message doit contenir au moins 4 caractères !" />
                                        <div className="validate"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Adresse mail" data-rule="email" data-msg="Adresse mail invalide" />
                                        <div className="validate"/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="specialite" id="specialite" placeholder="Votre specialité" data-rule="minlen:4" data-msg="La valeur entrée doit contenir au moins 4 caractères !" />
                                        <div className="validate"/>
                                    </div>
                                </div>
                               
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"/>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <br/><div className="text-center"><button type="submit">Nous rejoindre</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section><br/>
            <br/>
        </main>
    )
}