import React from 'react';

class BenchForm extends React.Component {
  render () {
    return (
    <form>
      <label>Description<input></input></label>
      <label>Number of Seats<input></input></label>
      <label>Latitude
        <input readOnly="readonly" value={this.props.lat}></input>
      </label>
      <label>Longitude
        <input readOnly="readonly" value={this.props.lng}></input>
      </label>
    </form>
    );
  }
}

export default BenchForm;
