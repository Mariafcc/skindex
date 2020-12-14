import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Container, Col, Row } from 'react-bootstrap';
import "./style/map.css"

const mapStyle = {
    width: 300,
    height: 300,
    
}

const mapboxApiKey = process.env.REACT_APP_MAPBOX_API_KEY

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
            storeChain: props.store,
            storeLocations: [],
            selectedStore: null
        };
    }

    getStores = () => {
        
        let storesURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + (this.state.storeChain) + `.json?limit=5&proximity=` + (this.state.userLocation.long) + `,` + (this.state.userLocation.lat) + `&access_token=` + mapboxApiKey;
        fetch(storesURL)
            .then(response => response.json())
            .then(stores => {
                this.setState({
                    storeLocations: stores.features
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
        if (this.state.storeLocations.length > 0) {
            return this.state.storeLocations.map(store => {
                return (
                    <Marker
                        key={store.id}
                        latitude={parseFloat(store.geometry.coordinates[1])}
                        longitude={parseFloat(store.geometry.coordinates[0])}
                    >
                        {this.state.storeChain === "target" ?
                            <img onClick={() => { this.setSelectedStore(store) }} className="location-icon" src="img/map-target-logo.png" />
                            : <img onClick={() => { this.setSelectedStore(store) }} className="location-icon" src="img/map-sephora-logo.png" />
                        }

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
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.userLocation !== prevState.userLocation) {
            this.getStores()
        }
    }

    render() {
        const { viewport, markers } = this.state;
        return (
            <Container fluid={true}>
                <Row>
                    <Col className="">
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
                                    <div></div>
                                )}
                            {this.loadStoreMarkers()}
                            {this.state.selectedStore !== null &&
                                <Popup
                                    latitude={parseFloat(this.state.selectedStore.geometry.coordinates[1])}
                                    longitude={parseFloat(this.state.selectedStore.geometry.coordinates[0])}
                                    onClose={this.closePopup}
                                    closeButton={true}
                                    closeOnClick={false}
                                    anchor="bottom"
                                    dynamicPosition={true}
                                >
                                    <p>{this.state.selectedStore.place_name}</p>
                                </Popup>
                            }
                        </ReactMapGL>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Map;
