class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
    this.benches = [];
  }

  updateMarkers(benches){
    this._benchesToAdd(benches).forEach( bench => {
      this._createMarkerFromBench(bench);
    });
  }

  _benchesToAdd(benches) {
    debugger;
    const btoa = benches.map( bench => {
      if (!this.benches.includes(bench)) {
        return bench;
      }
    });
    return btoa;
  }

  _createMarkerFromBench(bench) {
    const marker = new google.maps.Marker({
    position: {lat: bench.lat, lng: bench.lng},
    map: this.map,
    title: bench.description
    });
    this.markers.push(marker);
    this.benches.push(bench);
  }
}


export default MarkerManager;
