import React from 'react';
import './assets/css/contact.css';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="contact-page">
                <h1 className="contact-header"> Contact </h1>
                <div className="contact-info">
                    <p className="contact-text"> Donnie Sultan </p>
                    <p className="contact-text">  (662) 417-2501 </p>
                    <p className="contact-text"> donnie@northmsproperties.com </p>
                    <p className="contact-par">
                        If you're interested in this property and want to view the property or if you have any questions. Give me a call, shoot me an email or use the form below and I'll get back to you a.s.a.p!
                    </p>
                </div>
                <form className="contact-form" action="https://formspree.io/donnie@northmsproperties.com" method="POST">
                    <div className="contactRow">
                        <label htmlFor="form_name" className="form_label"><i className="far fa-user"></i></label>
                        <input type="text" name="name" className="input" placeholder="NAME*"/>
                    </div>
                    <div className="contactRow">
                        <label htmlFor="form_email" className="form_label"><i className="far fa-envelope"></i></label>
                        <input type="text" name="email" className="input" placeholder="EMAIL*"/>
                    </div>
                    <div className="contactRow">
                        <label htmlFor="form_number" className="form_label"><i className="fas fa-phone"></i></label>
                        <input type="tel" name="phone" className="input" placeholder="PHONE NUMBER" />
                    </div>
                    <div className="message_row">
                        <label htmlFor="form_message" className="form_label"><i className="fas fa-envelope"></i></label>
                        <input type="text" name="message" className="message_input" placeholder="MESSAGE*" />
                    </div>
                    <div className="contactRow">
                        <button id="form-button"><i className="far fa-paper-plane"></i> SEND </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;