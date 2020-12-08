import React, { Component, PureComponent } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, Col, Row } from 'react-bootstrap';
import "./style/map.css"

const mapStyle = {
    width: 300,
    height: 300
}

const mapboxApiKey = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg'
class Map extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 0,
                longitude: 0,
                zoom: 10
            },
            userLocation: {
                lat: 0,
                long: 0
            },
            storeLocations: []
        };

    }

    // setUserLocation = () => {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         let currentUserLocation = {
    //             lat: position.coords.latitude,
    //             long: position.coords.longitude
    //         };
    //         let newViewport = {
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude,
    //             zoom: 5
    //         };
    //         this.setState({
    //             viewport: newViewport,
    //             userLocation: currentUserLocation
    //         })
    //     })
    //     // if (this.state.userLocation.lat !== 0 && this.state.userLocation.long !==0) {
    //     //     // this.getTargetStores()
    //     //     this.getSephoraStores()
    //     // }
    //     console.log("setUserLocation", this.state.userLocation)
    // }

    getTargetStores = () => {
        console.log("getTargetStores running")
        let targetURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/target.json?limit=10&proximity=` + (this.state.userLocation.long) + `,` + (this.state.userLocation.lat) + `&access_token=` + mapboxApiKey;
        console.log(targetURL);
        fetch(targetURL)
        .then(response => response.json())
        .then(data => {
            let targetStoreList = data.features;
            this.setState({
                storeLocations: targetStoreList
            })
        })
    }

    getSephoraStores = () => {
        console.log("getSephoraStores running")
        let sephoraURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/sephora.json?limit=10&proximity=` + (this.state.userLocation.long) + `,` + (this.state.userLocation.lat) + `&access_token=` + mapboxApiKey;
        console.log(sephoraURL);
        fetch(sephoraURL)
        .then(response => response.json())
        // .then(data => console.log(data.features))
        .then(data => {
            let sephoraStoreList = data.features;
            this.setState({
                storeLocations: sephoraStoreList
            })
        })
        // .then(console.log(this.state.storeLocations))
    }

    componentDidMount() {
        // this.setUserLocation();
        navigator.geolocation.getCurrentPosition(position => {
            let currentUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            let newViewport = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 5
            };
            this.setState({
                viewport: newViewport,
                userLocation: currentUserLocation
            })
        })
        console.log("componentDidMount", this.state.userLocation);
    }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate,", this.state.userLocation)
    //     if (this.state.userLocation.lat !== 0 && this.state.userLocation.long !==0) {
    //         // this.getTargetStores()
    //         this.getSephoraStores()
    //     }
    // }

    render() {
        const { viewport, markers } = this.state;
        {console.log("render", this.state.userLocation)}
        return (
            <Container fluid={true}>
                {/* <Row>
                    <Col><h2>Mapbox Tutorial</h2></Col>
                </Row> */}
                <Row>
                    <Col>
                        <ReactMapGL
                            mapboxApiAccessToken={mapboxApiKey}
                            mapStyle="mapbox://styles/mapbox/streets-v11"
                            {...viewport}
                            {...mapStyle}
                            onViewportChange={(viewport) => this.setState({ viewport })}
                        >
                            {Object.keys(this.state.userLocation).length !==0 ? (
                                <Marker
                                latitude = {this.state.userLocation.lat}
                                longitude = {this.state.userLocation.long}
                                >
                                    <img className="location-icon" src="img/map-location-icon.png" />
                                </Marker>
                            ) : (
                                <div>Empty</div>
                            )}
                        </ReactMapGL>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Map;
