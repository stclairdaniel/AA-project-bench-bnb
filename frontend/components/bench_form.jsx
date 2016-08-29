import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: this.props.lat, lng: this.props.lng, seating: "", description: ""};
    this._handleClick = this._handleClick.bind(this);
    this._descriptionOnChange = this._descriptionOnChange.bind(this);
    this._seatingOnChange = this._seatingOnChange.bind(this);
  }

  _handleClick (e) {
    e.preventDefault();
    this.props.handleSubmit({bench: this.state});
    this.props.router.push("/");
  }

  _descriptionOnChange (e) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  _seatingOnChange (e) {
    e.preventDefault();
    this.setState({seating: e.target.value});
  }

  render () {
    return (
    <form>
      <label>Description
        <input onChange={this._descriptionOnChange}></input>
      </label>
      <label>Number of Seats
        <input onChange={this._seatingOnChange}></input>
      </label>
      <label>Latitude
        <input readOnly="readonly" value={this.props.lat} ></input>
      </label>
      <label>Longitude
        <input readOnly="readonly" value={this.props.lng}></input>
      </label>
      <input type="submit" onClick={this._handleClick}></input>
    </form>
    );
  }
}

export default withRouter(BenchForm);
