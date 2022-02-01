import React from 'react'
import '../assets/css/Verhuur.css'
import Slider from '../components/Slider'
import Zaal1 from '../assets/images/openhuis/carousel/zaal 1.jpg'
import Zaal2 from '../assets/images/openhuis/carousel/zaal 2.jpg'
import Zaal3 from '../assets/images/openhuis/carousel/zaal 3.jpg'
import Zaal4 from '../assets/images/openhuis/carousel/zaal 4.jpg'
import Zaal5 from '../assets/images/openhuis/carousel/zaal 5.jpg'
import Zaal6 from '../assets/images/openhuis/carousel/zaal 6.jpg'
import Footer from '../components/Footer'

const Jeugdhuis = () => {
  return <div className='Jeugdhuis'>
    <div className='Zaal'>
      <h1>JEUGDHUIS</h1>
        <a>
        Ebitae esseque dolor sit eatumet, ulles dit abo. Dunditis essitibusam, eum<br/>
        num quid ulleniti ut este pore voluptaque preic tecusam num laceproribus<br/>
        vitintia volorep tasperum que peruptaqui re sam qui ditatiume mi,<br/>
        impore, conessitem. Nem es aut parcil molest explaces reptaturi cuptati<br/>
        odis estrumque et odit, qui ipiendebis nam que laccae. Rovide voluptate<br/>
        velitatust, cor ant repe corepta
      </a>
    </div>
    
    <div className='Verhuren'>
      <h2>Verhuren</h2>
      <a>
      Ebitae esseque dolor sit eatumet, ulles dit abo. Dunditis essitibusam, eum num quid ulleniti ut este<br/>
      pore voluptaque preic tecusam num laceproribus vitintia volorep tasperum que peruptaqui re<br/>
      sam qui ditatiume mi, impore, conessitem. Nem es aut parcil molest explaces reptaturi cuptati odis<br/>
      estrumque et odit, qui ipiendebis nam que laccae. Rovide voluptate velitatust, cor ant repe corepta
      </a>
    </div>

    <Slider />

    <Footer />
  </div>;
};

export default Jeugdhuis;
