import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {Segment, Sidebar} from 'semantic-ui-react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import withLoadingSpinner from './Components/withLoadingSpinner'

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
const mapCenter = [38.8977, -77.0365]
const zoom = 16
const maxZoom = 19


class App extends Component {

  constructor() {
    super()
    this.state = {
      trees: [],
      coords: "-77.0466470718384,38.89195139727248,-77.0263695716858,38.90345757744355"
    }
  }

  componentDidMount = () => {
      this.fetchTrees()
  }

  fetchTrees = () => {
    fetch(`http://localhost:5000/trees?bbox=${this.state.coords}`)
      .then(res => res.json())
      .then(data => {
        this.setState({trees: data.features})
      })
  }

  handleMapMove = () => {
    let swLng = this.leafletMap.leafletElement.getBounds()._southWest.lng
    let swLat = this.leafletMap.leafletElement.getBounds()._southWest.lat
    let neLng = this.leafletMap.leafletElement.getBounds()._northEast.lng
    let neLat = this.leafletMap.leafletElement.getBounds()._northEast.lat
    this.setState({coords: `${swLng},${swLat},${neLng},${neLat}`})
    this.fetchTrees()
  }

  render() {

    return (
      <div>
        <Sidebar.Pushable
          as={Segment}
          style={{height: '100vh', overflow: 'hidden'}}
        >
        <Navbar/>
        <Sidebar.Pusher
          style={{height: '100vh', color: '#edc4bc'}}
        >
          <Map
            ref={m => { this.leafletMap = m }}
            id="map"
            center={mapCenter}
            zoom={zoom}
            maxZoom={maxZoom}
            onMoveEnd={this.handleMapMove.bind()}
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
                    style={{fontColor: '#edc4bc'}}
                  >
                  <Popup key={`pop_${tree.properties.id}`}>
                    {tree.properties.common_name ? (<div>{`Common name: ${tree.properties.common_name}`}</div>) : null}
                    {tree.properties.scientific_name ? (<div>{`Scientific name: ${tree.properties.scientific_name}`}</div>) : null}
                    {tree.properties.fam_name ? (<div>{`Family: ${tree.properties.fam_name}`}</div>) : null}
                    {tree.properties.genus_name ? (<div>{`Genus: ${tree.properties.genus_name}`}</div>) : null}
                    {tree.properties.condition ? (<div>{`Condition: ${tree.properties.condition}`}</div>) : null}
                    Address: {tree.properties.address}
                  </Popup>
                </Marker>
              )
            })}
            </MarkerClusterGroup>
          </Map>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default withLoadingSpinner(App);
