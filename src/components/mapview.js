import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import React, { Component } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXRzaXJhayIsImEiOiJjazczcWk2cnMwZDdwM2ZvZ2F4N2FwdWY3In0.LNTzk_3N9EvpS9Vx3pFn1A";

class Mapview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/itsirak/ck81zfinq4l2w1iqjk5azl7ct",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: "red", minHeight: "100vh" }}
          ref={el => (this.mapContainer = el)}
        />
      </div>
    );
  }
}

export default Mapview;
