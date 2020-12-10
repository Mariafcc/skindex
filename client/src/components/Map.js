import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { Container, Col, Row } from 'react-bootstrap';
import "./style/map.css"

const mapStyle = {
    width: 300,
    height: 300
}

const mapboxApiKey = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg'

class Map extends Component {
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
            storeLocations: [],
            selectedStore: null
        };
        // props.store does get corresponding store for item passed from productselector.js
        console.log(props.store)
    }

    getTargetStores = () => {
        console.log("getTargetStores running")
        let targetURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/target.json?limit=5&proximity=` + (this.state.userLocation.long) + `,` + (this.state.userLocation.lat) + `&access_token=` + mapboxApiKey;
        console.log(targetURL);
        fetch(targetURL)
            .then(response => response.json())
            .then(targetStores => {
                console.log(targetStores.features)
                this.setState({
                    storeLocations: targetStores.features
                })
            })
        console.log("componentDidMount", this.state.userLocation);
    }

    getSephoraStores = () => {
        console.log("getSephoraStores running")
        let sephoraURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/sephora.json?limit=5&proximity=` + (this.state.userLocation.long) + `,` + (this.state.userLocation.lat) + `&access_token=` + mapboxApiKey;
        console.log(sephoraURL);
        fetch(sephoraURL)
            .then(response => response.json())
            .then(sephoraStores => {
                console.log(sephoraStores.features)
                this.setState({
                    storeLocations: sephoraStores.features
                })
            })
    }

    setSelectedStore = (object) => {
        this.setState({
            selectedStore: object
        })
    }

    closePopup = () => {
        this.setState({
            selectedStore: null
        })
    }

    loadStoreMarkers = () => {
        console.log(this.state.storeLocations)
        if (this.state.storeLocations.length > 0) {
            return this.state.storeLocations.map(store => {
                return (
                    <Marker
                        key={store.id}
                        latitude={parseFloat(store.geometry.coordinates[1])}
                        longitude={parseFloat(store.geometry.coordinates[0])}
                    >
                        <img onClick={() => { this.setSelectedStore(store) }} className="location-icon" src="img/map-target-logo.png" />
                    </Marker>
                )
            })
        }

    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            let currentUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            let newViewport = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 7
            };
            this.setState(() => ({
                viewport: newViewport,
                userLocation: currentUserLocation
            }))
        })
        console.log("componentDidMount", this.state.userLocation);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate,", this.state.userLocation)
        if (this.state.userLocation !== prevState.userLocation) {
            this.getTargetStores()
            // this.getSephoraStores()
        }
    }

    render() {
        const { viewport, markers } = this.state;
        { console.log("render", this.state.userLocation) }
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
                            {Object.keys(this.state.userLocation).length !== 0 ? (
                                <Marker
                                    latitude={this.state.userLocation.lat}
                                    longitude={this.state.userLocation.long}
                                >
                                    <img className="location-icon" src="img/map-location-icon.png" />
                                </Marker>
                            ) : (
                                    <div>Empty</div>
                                )}
                            {this.loadStoreMarkers()}
                            {this.state.selectedStore !== null ? (
                                <Popup
                                    latitude={parseFloat(this.state.selectedStore.latitude)}
                                    longitude={parseFloat(this.state.selectedStore.longitude)}
                                    onClose={this.closePopup}
                                >
                                    <p>Store Information</p>
                                </Popup>
                            ) : null}
                        </ReactMapGL>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Map;
