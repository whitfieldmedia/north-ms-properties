import React from 'react';
import Gallery from './Gallery';
import './assets/scss/contact.scss';

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
                <div className="contact-info">
                    <p className="contact-name"> Chris Reed </p>
                    <p className="contact-text">  (662) 229-7003 </p>
                    <p className="contact-text"> chris@coltmor.com </p>
                    <p className="contact-par">
                        If you're interested in this property and want to view the property or if you have any questions. Give me a call or shoot me an email!
                    </p>
                </div>
                <Gallery />
            </div>
        )
    }
}

export default Contact;