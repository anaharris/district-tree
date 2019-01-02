import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import treeData from './data/more_data.json'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const customIcon = new L.Icon({
    iconUrl: require('./assets/png/marker.png'),
    iconSize: [25, 25]
})

const accessToken = 'pk.eyJ1IjoiYW5haGFycmlzIiwiYSI6ImNqcWQyamVxOTBrMG40Mm4yYWFwYWtnc3gifQ.y6JLzfgsdsmZJqy1V1rsfg'
const tileUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const mapCenter = [38.9072, -77.0369]
const zoom = 13
const maxZoom = 19


class App extends Component {

  constructor() {
    super()
    this.state = {
      trees: treeData.features,
      cliked: null
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
          maxZoom={maxZoom}
        >
          <TileLayer
            attribution={attribution}
            url={tileUrl}
            id={'mapbox.light'}
            accessToken={accessToken}
          />
            <MarkerClusterGroup>
          {this.state.trees.map(tree => {
            return (
                <Marker
                  key={`marker_${tree.properties.id}`}
                  position={[tree.geometry.coordinates[1], tree.geometry.coordinates[0]]}
                  icon={customIcon}
                >
                <Popup key={`pop_${tree.properties.id}`}>
                  {tree.properties.common_name ? (<div>{`Common name: ${tree.properties.common_name}`}</div>) : null}
                  {tree.properties.scientific_name ? (<div>{`Scientific name: ${tree.properties.scientific_name}`}</div>) : null}
                  {tree.properties.fam_name ? (<div>{`Family: ${tree.properties.fam_name}`}</div>) : null}
                  {tree.properties.genus_name ? (<div>{`Genus: ${tree.properties.genus_name}`}</div>) : null}
                  {tree.properties.condition ? (<div>{`Condition: ${tree.properties.condition}`}</div>) : null}
                  Address: {tree.properties.address}
                </Popup>
              </ Marker>
            )
          })}
          </ MarkerClusterGroup>

        </ Map>
        <Navbar />
      </div>
    )
  }

}

export default App;
