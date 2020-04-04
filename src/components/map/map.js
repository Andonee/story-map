import React from 'react'

import { Map, TileLayer } from 'react-leaflet'
import styles from './map.module.css'
import styless from '../../basemaps/basemaps'
import Basemaps from '../../basemaps/basemaps'

class MapContainer extends React.Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 2
  }

  render(){
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} className={styles.map_container}>
        {/* <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              /> */}
        <Basemaps color= "red"/>
      </Map>

    )
  }
  
}


  export default MapContainer
