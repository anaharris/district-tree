import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import treeData from './data/data.json'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const accessToken = 'pk.eyJ1IjoiYW5haGFycmlzIiwiYSI6ImNqcWQyamVxOTBrMG40Mm4yYWFwYWtnc3gifQ.y6JLzfgsdsmZJqy1V1rsfg'
const tileUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const mapCenter = [38.9072, -77.0369]
const zoom = 13


class App extends Component {

  constructor() {
    super()
    this.state = {
      trees: treeData.features
    }
  }

  render() {
    return (
      <div>
        <Map
          ref={m => { this.leafletMap = m; }}
          id="map"
          center={mapCenter}
          zoom={zoom}
        >
          <TileLayer
            attribution={attribution}
            url={tileUrl}
            id={'mapbox.light'}
            accessToken={accessToken}
          />
          {
            this.state.trees.map(tree => {
            return (
              <Marker
                key={`marker_${tree.properties.id}`}
                position={[tree.geometry.coordinates[1], tree.geometry.coordinates[0]]}
              >
              <Popup key={`pop_${tree.properties.id}`}>
                {tree.properties.common_name ? (<div>{`Common name: ${tree.properties.common_name}`}</div>) : null}
                {tree.properties.scientific_name ? (<div>{`Scientific name: ${tree.properties.scientific_name}`}</div>) : null}
                {tree.properties.fam_name ? (<div>{`Family: ${tree.properties.fam_name}`}</div>) : null}
                {tree.properties.genus_name ? (<div>{`Genus: ${tree.properties.genus_name}`}</div>) : null}
                {tree.properties.condition ? (<div>{`Condition: ${tree.properties.condition}`}</div>) : null}
                Address: {tree.properties.address}
              </Popup>
            </ Marker>)
          })}
        </ Map>
        <Navbar />
      </div>
    )
  }

}

export default App;
