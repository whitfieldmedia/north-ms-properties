import React from 'react';
import img1 from './assets/images/air_view_winona_facility.png';
import img1Small from './assets/images/air_view_small_winona_facility.png';
import img2 from './assets/images/bathroom1_winona_facility.png';
import img2Small from './assets/images/bathroom1_small_winona_facility.png';
import img3 from './assets/images/closet1_winona_facility.png';
import img3Small from './assets/images/closet1_small_winona_facility.png';
import img4 from './assets/images/closet2_winona_facility.png';
import img4Small from './assets/images/closet2_small_winona_facility.png';
import img5 from './assets/images/facility1_winona_facility.png';
import img5Small from './assets/images/facility1_small_winona_facility.png';
import img6 from './assets/images/facility2_winona_facility.png';
import img6Small from './assets/images/facility2_small_winona_facility.png';
import img7Small from './assets/images/front2_small_winona_facility.png';
import img7 from './assets/images/front2_winona_facility.png';
import img9Small from './assets/images/hall1_small_winona_facility.png';
import img9 from './assets/images/hall1_winona_facility.png';
import img10Small from './assets/images/kitchen1_small_winona_facility.png';
import img10 from './assets/images/kitchen1_winona_facility.png';
import img11Small from './assets/images/kitchen_small_winona_facility.png';
import img11 from './assets/images/kitchen_winona_facility.png';
import img12Small from './assets/images/lake1_small_winona_facility.png';
import img12 from './assets/images/lake1_winona_facility.png';
import img13Small from './assets/images/laundry_room_small_winona_facility.png';
import img13 from './assets/images/laundry_room_winona_facility.png';
import img14Small from './assets/images/living_room1_small_winona_facility.png'
import img14 from './assets/images/living_room1_winona_facility.png';
import img15Small from './assets/images/living_room2_small_winona_facility.png';
import img15 from './assets/images/living_room2_winona_facility.png';
import img16Small from './assets/images/living_room3_small_winona_facility.png';
import img16 from './assets/images/living_room3_winona_facility.png';
import img17Small from './assets/images/main_room_small_winona_facility.png';
import img17 from './assets/images/main_room_winona_facility.png';
import img18Small from './assets/images/map1_small_winona_facility.png';
import img18 from './assets/images/map1_winona_facility.png';
import img22Small from './assets/images/room1_small_winona_facility.png';
import img22 from './assets/images/room1_winona_facility.png';
import img23Small from './assets/images/room2_small_winona_facility.png';
import img23 from './assets/images/room2_winona_facility.png';
import img24Small from './assets/images/room3_small_winona_facility.png';
import img24 from './assets/images/room3_winona_facility.png';
import img25Small from './assets/images/room4_small_winona_facility.png';
import img25 from './assets/images/room4_winona_facility.png';
import img26Small from './assets/images/room5_small_winona_facility.png';
import img26 from './assets/images/room5_winona_facility.png';
import img27Small from './assets/images/room6_small_winona_facility.png';
import img27 from './assets/images/room6_winona_facility.png';
import img28Small from './assets/images/room7_small_winona_facility.png';
import img28 from './assets/images/room7_winona_facility.png';
import img29Small from './assets/images/room8_small_winona_facility.png';
import img29 from './assets/images/room8_winona_facility.png';
import img31Small from './assets/images/trailer1_small_winona_facility.png';
import img31 from './assets/images/trailer1_winona-facility.png';
import img32Small from './assets/images/trailer2_small_winona_facility.png';
import img32 from './assets/images/trailer2_winona_facility.png';
import img33Small from './assets/images/trailer_with_lake_small_winona_facility.png';
import img33 from './assets/images/trailer_with_lake_winona_facility.png';
import img34 from './assets/images/property_map_winona_facility.png';
import img34Small from './assets/images/property_map_small_winona_facility.png';
import ImageGallery from 'react-image-gallery';
import './assets/css/gallery.css';

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [
                {original: `${img5}`, thumbnail: `${img5Small}`}, 
                {original: `${img6}`, thumbnail: `${img6Small}`}, 
                {original: `${img7}`, thumbnail: `${img7Small}`},
                {original: `${img34}`, thumbnail: `${img34Small}`}, 
                {original: `${img31}`, thumbnail: `${img31Small}`}, 
                {original: `${img32}`, thumbnail: `${img32Small}`},
                {original: `${img33}`, thumbnail: `${img33Small}`}, 
                {original: `${img1}`, thumbnail: `${img1Small}`}, 
                {original: `${img12}`, thumbnail: `${img12Small}`},
                {original: `${img17}`, thumbnail: `${img17Small}`}, 
                {original: `${img16}`, thumbnail: `${img16Small}`}, 
                {original: `${img9}`, thumbnail: `${img9Small}`},
                {original: `${img10}`, thumbnail: `${img10Small}`}, 
                {original: `${img11}`, thumbnail: `${img11Small}`}, 
                {original: `${img14}`, thumbnail: `${img14Small}`},
                {original: `${img15}`, thumbnail: `${img15Small}`}, 
                {original: `${img22}`, thumbnail: `${img22Small}`}, 
                {original: `${img23}`, thumbnail: `${img23Small}`},
                {original: `${img24}`, thumbnail: `${img24Small}`}, 
                {original: `${img25}`, thumbnail: `${img25Small}`}, 
                {original: `${img26}`, thumbnail: `${img26Small}`},
                {original: `${img27}`, thumbnail: `${img27Small}`}, 
                {original: `${img28}`, thumbnail: `${img28Small}`}, 
                {original: `${img29}`, thumbnail: `${img29Small}`},
                {original: `${img13}`, thumbnail: `${img13Small}`}, 
                {original: `${img2}`, thumbnail: `${img2Small}`}, 
                {original: `${img3}`, thumbnail: `${img3Small}`},
                {original: `${img4}`, thumbnail: `${img4Small}`}, 
                {original: `${img18}`, thumbnail: `${img18Small}`}
            ],
        }
    }
    handleClick = () => {
        const gallery = this.refs.imageGallery;
        gallery.fullScreen();
        gallery.pause();
    }
    handleMouseOver = () => {
        this.refs.imageGallery.pause();
    }
    handleMouseLeave = () => {
        this.refs.imageGallery.play();
    }
    render() {
        return (
            <div className="grid-gallery-holder">
                <ImageGallery slideInterval='4000' onClick={this.handleClick} ref="imageGallery" id="image-gallery" items={this.state.images} />
            </div>
        )
    }
}

export default Gallery;