import React, { Component } from 'react'
import {Map, TileLayer} from 'react-leaflet'

const accessToken = 'pk.eyJ1IjoiYW5haGFycmlzIiwiYSI6ImNqcWQyamVxOTBrMG40Mm4yYWFwYWtnc3gifQ.y6JLzfgsdsmZJqy1V1rsfg'
const tileUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'


class App extends Component {
  render() {
    return (
        <Map id="map" center={[38.9072, -77.0369]} zoom={12}>
        <TileLayer
          attribution={attribution}
          url={tileUrl}
          id={'mapbox.light'}
          accessToken={accessToken}
        />
          </ Map>
    );
  }
}

export default App;
