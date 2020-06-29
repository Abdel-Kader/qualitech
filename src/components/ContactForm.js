import React from 'react'

export default class ContactForm extends React.Component
{
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <form action="#" method="post" className="php-email-form">
                <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Nom et prénom" data-rule="minlen:3" data-msg="Votre nom doit contenir au moins 3 caractères !" />
                    <div className="validate"/>
                </div>
                <div className="form-row">
                    <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Adresse mail" data-rule="email" data-msg="Adresse mail invalide" />
                        <div className="validate"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" className="form-control" name="telephone" id="telephone" placeholder="Numéro de téléphone" data-rule="minlen:4" data-msg="L'objet du message doit contenir au moins 4 caractères !" />
                        <div className="validate"/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" data-rule="minlen:4" data-msg="L'objet du message doit contenir au moins 4 caractères !" />
                    <div className="validate"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Message" placeholder="Message"/>
                    <div className="validate"/>
                </div>
                <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"/>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Envoyer</button></div>
            </form>
        )
    }
}
