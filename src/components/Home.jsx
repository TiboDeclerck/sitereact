import React from 'react'
import '../assets/css/Home.css'
import Logo from '../assets/images/LogoJOB.png'
import { IoLogoInstagram } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import Footer from './Footer'

const Home = () => {
  return <div className='body'>
    <h1>JEUGDHUIS OUDE BAREEL</h1>
    <h3>Wij zijn een groep jongeren (-25 jaar) die actief lid zijn in Jeugdhuis JOB!<br/>
    Wij organiseren de activiteiten in het jeugdhuis en maken deel uit van de Raad van Bestuur.<br/>
    Voor jongeren door jongeren</h3>
    <img src={Logo} id="logo"/>
    <h2>Volg je ons al op onze social media?</h2>

    <div className="socialLogo">
      <a href='https://www.instagram.com/jeugdhuisjob/' className='socialLogo'><IoLogoInstagram size={70} color='white'/></a>
      <a href='https://www.facebook.com/jeugdhuisjob/' className='socialLogo'><FaFacebookF size={50} color='white'/></a>
    </div>
    
    <Footer/>
    </div>;
};

export default Home;
