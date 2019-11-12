import React from 'react';

import Form from './components/Form'
import './App.css'

import axios from 'axios';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {PhongMaterial} from '@luma.gl/core';
import {StaticMap} from 'react-map-gl';
import Form from './components/Form';

// Initial viewport settings
const initialViewState = {
  latitude: 29.759662,
  longitude: -95.402218,
  zoom: 9,
  pitch: 0,
  bearing: 0
};


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false
    };

    const promises = [
      axios.get(`/api/env/mapBoxKey`).then(data => {
        this.setState({
          mapBoxKey: data.data.val
        });
      }).catch(err => console.log(err.message)),
      axios.get(`/harris211_geo.min.json`).then(data => {
        console.log(data.data);
        this.setState({
          geoJson: data.data
        });
      })
    ];

    Promise.all(promises).then(() => {
      this.setState({ loaded: true });
    });
  }

  extrudedOptions(geoJson) {
    return {
      id: 'zip-geojson',
      data: geoJson,
      stroked: true,
      extruded: true,
      elevationScale: 10,
      lineWidthScale: 1,
      lineWidthMinPixels: 1,
      getFillColor: () => [255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 200],
      // getFillColor: [0, 255, 0, 255],
      getLineColor: [0, 0, 0, 255],
      getLineWidth: 1,
      getElevation: () => Math.random() * 1000,
      material: new PhongMaterial({
        ambient: 0,
        diffuse: 1,
        shininess: 0
      })
    };
  }

  colorCodedOptions(geoJson) {
    return {
      id: 'zip-geojson',
      data: geoJson,
      pickable: true,
      stroked: true,
      lineWidthScale: 1,
      lineWidthMinPixels: 1,
      // getFillColor: [160, 160, 180, 200],
      getFillColor: () => [255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 200],
      getLineColor: [0, 0, 0, 255],
      getLineWidth: 1,
      
      onHover: data => this.setState({
        hoveredObject: data.object,
        pointerX: data.x,
        pointerY: data.y
      })
    };
  }

  _renderTooltip() {
    const {
      hoveredObject, 
      pointerX, 
      pointerY
    } = this.state || {};
    
    if(hoveredObject) {
      const zipCode = hoveredObject.properties.ZCTA5CE10;

      return (
        <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
          { zipCode }
        </div>
      );
    }

    return null;
  }
  
  render() {
    const {
      loaded,
      mapBoxKey,
      geoJson
    } = this.state;

    if(loaded) {
      const layers = [
        new GeoJsonLayer(this.colorCodedOptions(geoJson))
      ];

      return (
        <>
          <h1>211 DATA MAP</h1>
          <Form/>

          <DeckGL
            initialViewState={initialViewState}
            controller={true}
            layers={layers}
          >
            <StaticMap mapboxApiAccessToken={mapBoxKey} />
            { this._renderTooltip() }
          </DeckGL>
        </>
      );
    }
    else {
      return (
        <>
          <p>Loading...</p>
        </>
      )
    }
  }
}
export default App;
