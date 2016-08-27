import React from 'react';
import MarkerManager from '../util/marker_manager.js';

class BenchMap extends React.Component {
  componentDidMount(){
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

    this.map.addListener('idle', () => {
      const latLngBounds = this.map.getBounds();
      const northEast = latLngBounds.getNorthEast();
      const southWest = latLngBounds.getSouthWest();
      const bounds = {
        "northEast": {"lat": northEast.lat(), "lng": northEast.lng()},
        "southWest": {"lat": southWest.lat(), "lng": southWest.lng()}
      };
      this.props.updateBounds(bounds);
    });
  }

  componentWillReceiveProps(props) {
    this.MarkerManager.updateMarkers(props.benches);
  }

  render () {
    return (<div id='map-container' ref='map'></div>);
  }
}

export default BenchMap;
