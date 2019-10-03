import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
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
                <div className="header-container">
                    <h1 className="header"> Investment Property Available Now! </h1>
                    <h2 className="home-header"> 
                        Formerly certified assisted living facility
                    </h2>
                    <div className="home-header-row">
                        <h2 className="home-header2"> $1,350,000 </h2>
                        <h2 className="home-header2"> 57.85 acres </h2>
                    </div>
                </div>
                <iframe id="home-video" title="27473 Hwy 82 W McCarley" src="https://player.vimeo.com/video/363561281" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                <a href="tel:6624172501" className="home-address-link">  (662) 417-2501 </a>
                <a href="https://www.google.com/maps/place/Hwy+82,+Mississippi/@33.4717752,-89.7971302,17z/data=!3m1!4b1!4m5!3m4!1s0x8881c247f96c51a1:0x2986886cfcc6b72e!8m2!3d33.4717707!4d-89.7949415" target="_blank" rel="noopener noreferrer" className="home-address-link">
                    27473 Highway 82 West, McCarley, Ms, 38943
                </a>
                <div className="home-button-row">
                    <Link to="/description-of-property">
                        <button className="home-contact-button"> 
                            Learn More <i className="fas fa-chevron-right fa-sm"></i>
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="home-contact-button"> 
                            Contact <i className="fas fa-chevron-right fa-sm"></i>
                        </button>
                    </Link>
                </div>

                <div className="home-bottom-section">
                    <div className="home-gallery-container">
                        <Gallery />
                    </div>
                    <div className="home-about-section">
                        <div className="home-bottom-column">
                            <h2 className="header2"> One Property Endless Possibilities </h2>
                            <ul className="home-list">
                                <li> Rehab Center </li>
                                <li> Company Retreat </li>
                                <li> Meeting Center </li>
                                <li> Nursing Home </li>
                                <li> Assisted Living Facility </li>
                                <li> Adult Daycare </li>
                            </ul>
                        </div>
                        <div className="home-bottom-column" id="home-margin">
                            <h2 className="header2"> The property </h2>
                            <ul className="home-list2">
                                <li>9,710 Sq.Ft.</li>
                                <li> 16 Space Concrete parking lot </li>
                                <li>11 Rooms w/ 15 guest occupancy </li>
                                <li> 57.85 acres  </li>
                                <li>3 Restrooms </li>
                                <li>4.7 acre fishing lake </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;  
