import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Events from './components/Events'
import Jeugdhuis from './components/Jeugdhuis'
import Openhuis from './components/Openhuis'
import Contact from './components/Contact'
import Media from './components/Media'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/jeugdhuis" element={<Jeugdhuis />}/>
        <Route path="/openhuis" element={<Openhuis />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/media" element={<Media />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
