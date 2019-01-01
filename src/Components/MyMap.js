import React, { Component } from 'react'
import L from 'leaflet'

class MyMap extends Component {

  componentDidMount() {
    this.map = L.map('map', {
      center: [38.9072, -77.0369],
      zoom: 12,
      layers: [
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.light',
          accessToken: 'pk.eyJ1IjoiYW5haGFycmlzIiwiYSI6ImNqcWQyamVxOTBrMG40Mm4yYWFwYWtnc3gifQ.y6JLzfgsdsmZJqy1V1rsfg'
        })
      ]
    })
  }


  render() {
    return (
      <div id='map'></div>
    )
  }

}

export default MyMap
