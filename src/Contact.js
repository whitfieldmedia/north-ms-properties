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
            </div>
        )
    }
}

export default Contact;