import React from 'react';
import MarkerManager from '../util/marker_manager.js';
import { withRouter } from 'react-router';

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

    this.map.addListener('bounds_changed', () => {
      const latLngBounds = this.map.getBounds();
      const northEast = latLngBounds.getNorthEast();
      const southWest = latLngBounds.getSouthWest();
      const bounds = {
        "northEast": {"lat": northEast.lat(), "lng": northEast.lng()},
        "southWest": {"lat": southWest.lat(), "lng": southWest.lng()}
      };
      this.props.updateBounds(bounds);
    });

    this.map.addListener('click', (event) => {
      this._handleCLick({lat: event.latLng.lat(), lng: event.latLng.lng()});
    });
  }

  componentWillReceiveProps(props) {
    this.MarkerManager.updateMarkers(props.benches);
  }

  _handleCLick(coords){
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  render () {
    return (<div id='map-container' ref='map'></div>);
  }
}

export default  withRouter(BenchMap);
