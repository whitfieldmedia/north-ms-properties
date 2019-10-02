import React from 'react';
import { Link } from 'react-router-dom';
import './assets/scss/home.scss';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-top-container">
                    <div className="background-overlay"></div>
                </div>
                <div className="home-header-container">
                    <h1 className="home-header"> Winona Assisted Living Facility </h1>
                    <a href="https://www.google.com/maps/place/Shady+Glenn+Retirement+Village/@33.4720183,-89.7953901,18.96z/data=!4m5!3m4!1s0x8881c247e2a2d2af:0x5cc1699a551c498f!8m2!3d33.4718328!4d-89.7950195" target="_blank" rel="noopener noreferrer" className="home-address-link">
                        27473 Highway 82 West, McCarley, Ms, 38943
                    </a>
                    <a href="tel:6624172501" className="home-address-link">  (662) 417-2501 </a>
                    <div className="home-button-row">
                        <Link to="/description-of-property">
                            <button className="home-contact-button"> 
                                Learn More 
                                <i className="fas fa-arrow-right"></i> 
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="home-contact-button"> 
                                Contact Us! 
                                <i className="fas fa-arrow-right"></i> 
                            </button>
                        </Link>
                    </div>
                </div>
                <iframe id="home-video" title="27473 Hwy 82 W McCarley" src="https://player.vimeo.com/video/363561281" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Home;  
