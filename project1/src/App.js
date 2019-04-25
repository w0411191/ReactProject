import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="App" style={{ height: '1000px', background: 'cornflowerblue' }}>
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlights/>
      <Pricing/>
    </div>
  );
}

export default App;
