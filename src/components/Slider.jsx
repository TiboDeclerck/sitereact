import React, { Component } from "react"
import Slider from "react-slick"
import Zaal1 from '../assets/images/openhuis/carousel/zaal 1.jpg'
import Zaal2 from '../assets/images/openhuis/carousel/zaal 2.jpg'
import Zaal3 from '../assets/images/openhuis/carousel/zaal 3.jpg'
import Zaal4 from '../assets/images/openhuis/carousel/zaal 4.jpg'
import Zaal5 from '../assets/images/openhuis/carousel/zaal 5.jpg'
import Zaal6 from '../assets/images/openhuis/carousel/zaal 6.jpg'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };

    return (
      <div className="Fotos">
        <h2>Foto's</h2>
        <Slider {...settings} className="Slider">
          <div>
            <img src={Zaal1} />
          </div>
          <div>
            <img src={Zaal2} />
          </div>
          <div>
            <img src={Zaal3} />
          </div>
          <div>
            <img src={Zaal4} />
          </div>
          <div>
            <img src={Zaal5} />
          </div>
          <div>
            <img src={Zaal6} />
          </div>
        </Slider>
      </div>
    );
  }
}