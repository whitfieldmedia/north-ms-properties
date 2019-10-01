import React from 'react';
import Gallery from './Gallery';
import './assets/scss/description.scss';

class Description extends React.Component {
    render() {
        return (
            <div className="description-page">
                <Gallery />
                <div className="description-holder">
                    <div className="description-row">
                        <div className="description-column">
                            <h3 className="description-header2"> 
                                The Property 
                            </h3>
                            <p className="description-par"> 
                                57.85 acres 
                            </p> 
                            <p className="description-par"> 
                                4.7 acre fishing lake 
                            </p>
                            <p className="description-par"> 
                                25' x 30' metal maintenance building with attached 12' x 25' office and restroom 
                            </p>
                        </div>
                        <div className="description-column">
                            <h3 className="description-header2"> 
                                Main Facility 
                            </h3>
                            <p className="description-par"> 
                                11 Rooms w/ 15 guest occupancy (4 double, 7 single w/ 1 handicap) with bath and closet 
                            </p>
                            <p className="description-par"> 
                                3 Restrooms 
                            </p>
                            <p className="description-par"> 
                                9,710 Sq.Ft. 
                            </p>
                            <p className="description-par"> 
                                16 Space concrete parking area 
                            </p>
                        </div>
                        <div className="description-column">
                            <h3 className="description-header2"> 
                                Manufactured Home 
                            </h3>
                            <p className="description-par"> 
                                3 bedrooms 
                            </p>
                            <p className="description-par"> 
                                2 baths 
                            </p>
                            <p className="description-par"> 
                                1,364 Sq.Ft. 
                            </p>
                        </div>
                    </div>
                    <h1 className="description-header2"> Property Description </h1>
                    <p className="description-par">
                        The subject property consists of an assisted living facility located at 27473 Highway 82 West, McCarley, Mississippi 38943, in Carroll County, approximately 1 1/2 to 2 miles west of I-55. It consists of a 11 room, 15 bed assisted living facility situated on an approximate 57.85 acre site fronting on the south right-of-way of 4-land US Highway 82.
                    </p>
                    <p className="description-par">
                        The Site is approved by the Mississippi Department of Health on February 8, 2013, by Derrick McInnis, Safety Consultant. The site has approximately 1,730 feet of frontage on the south right-of-way of US Highway 82 with depths of approximately 947 feet and 2023 feet (east lines) and 3,142 feet (west line) with rear dimensions of approximately 348 feet and 1,338 feet, containing a total of approximately 57.85 acres, more or less. 
                    </p>
                    <h2 className="description-header2"> Subject Improvements </h2>
                    <p className="description-par">
                        The subject improvements consist of a single story, handicap accessible, 11-room, 15-bed, sprinklered (wet system), assisted living facility of good quality construction with a dryvit exterior on metal studs with a composite shingle roof containing a total of approximately 9,710 square feet of space (exterior dimensions).
                    </p>    
                    <p className="description-par">
                        The finished area of the subject building contains approximately 9,510 square feet of centrally heated and cooled space consisting of a front entry area, a living and dining room area with double fireplace, kitchen with appliances (gas range with vent hood, double sing, freezer, refrigerator, ice maker, dishwasher and double oven), activity room, lounge area, library, office, conference room, laundry, beauty shop, janitor's closet, 3 restrooms, 11 guest rooms (4 double, 7 single with 1 handicap) with each room having a living/bedroom area, bath and closet with a compact refrigerator and a split ductless heat pump system and wall safe. There are 2 unfinished mechanical rooms approximately 200 square feet.
                    </p>
                    <p className="description-par">
                        The interior of the subject building consists of primarily carpet, ceramic tile, wood laminated vinyl plank and epoxy coated concrete flooring, and painted drywall walls and ceilings. The subject building has a fire and security alarm system with locking devices. 
                    </p>
                    <p className="description-par">
                        Other improvements to the subject building and subject property consist of an approximate 243 square foot covered entry area with an asphalt drive (25' wide) from the highway, a concrete parking area(16 spaces), signage, serveral gravel interior roads and a 25' x 30' metal shop/maintenance building with attached 12' x 25' office and restroom and 18' x 25' covered work area.
                    </p>
                    <p className="description-par">
                        There is also a 2014 Sunshine (3248-203) double wide manufactured home (serial # AL-S 19391AB) with 3 bedrooms and 2 baths containing a total of approximately 1,364 square feet of centrally heated and cooled living area in good overall condition.
                    </p>
                    <p className="description-par">
                        The Highest and Best Use of this property "as improved" is for an assisted living and/or nursing home or day care facility.
                    </p>
                </div>
            </div>
        )
    }
}
export default Description;