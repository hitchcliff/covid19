import React from 'react';
import './App.css';

import {TotalBox, LeafletMap, Rate, Country, WorldTotal} from './components'

function App() {

  return (
    <div className="App">
      <div className="App__container">
        <div className="App__container-1">
          <TotalBox></TotalBox>
          <Rate></Rate>
        </div>
        <div className="App__container-2">
          <LeafletMap ></LeafletMap>
          <Country></Country>
        </div>
        <div className="App__container-3">
          Donation
        </div>
      </div>
    </div>  
  );
}

export default App;
