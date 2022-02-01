import React from 'react'
import '../assets/css/Verhuur.css'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Openhuis = () => {
  return <div className='Openhuis'>
    <div className='Zaal'>
      <h1>OPENHUIS</h1>
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

export default Openhuis;
