import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'react-bootstrap';
import "./style/map.css"

const mapStyle = {
    width: 300,
    height: 300
}

const mapboxApiKey = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg'

const params = {
    country: "us"
}

const CustomMarker = ({ index, marker }) => {
    return (
        <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}>
            <div className="marker">
                <span><b>{index + 1}</b></span>
            </div>
        </Marker>
    )
};

// let currentLat;
// let currentLng;



class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 41.8781,
                longitude: -87.6298,
                zoom: 10
            },
            tempMarker: null,
            markers: []
        };

    }

    onSelected = (viewport, item) => {
        this.setState({
            viewport,
            tempMarker: {
                name: item.place_name,
                longitude: item.center[0],
                latitude: item.center[1]
            }
        })
    }

    add = () => {
        var { tempMarker } = this.state

        this.setState(prevState => ({
            markers: [...prevState.markers, tempMarker],
            tempMarker: null
        }))
    }

    // getCurrentLocation = () => {
    //     if ("geolocation" in navigator) {
    //         console.log("Available");
    //         let currentLat=0;
    //         let currentLng=0;
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             currentLat = position.coords.latitude;
    //             currentLng = position.coords.longitude;
    //             this.setState({
    //                 ...prevState,
    //                 latitude: currentLat,
    //                 longitude: currentLng
    //             })
    //             // console.log(currentLat, currentLng)
    //         })
    //         console.log(this.state.viewport.latitude)
    //     } else{
    //         console.log("Not available")
    //     }
    // }

    componentDidMount() {
        //     this.getCurrentLocation()
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
                // currentLat = position.coords.latitude;
                // currentLng = position.coords.longitude;
                console.log(position.coords.latitude, position.coords.longitude)
            });
            // console.log(currentLat, currentLng)
        } else {
            console.log("Location Not Available");
        }
    }

    render() {
        const { viewport, tempMarker, markers } = this.state;
        return (
            <Container fluid={true}>
                {/* <Row>
                    <Col><h2>Mapbox Tutorial</h2></Col>
                </Row> */}
                <Row className="py-4">
                    <Col xs={2}>
                        <Geocoder
                            mapboxApiAccessToken={mapboxApiKey}
                            onSelected={this.onSelected}
                            viewport={viewport}
                            hideOnSelect={true}
                            value=""
                            queryParams={params}
                        />
                    </Col>
                    <Col>
                        {/* <Button color="primary" onClick={this.add}>Add</Button> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReactMapGL
                            mapboxApiAccessToken={mapboxApiKey}
                            mapStyle="mapbox://styles/mapbox/streets-v11"
                            {...viewport}
                            {...mapStyle}
                            onViewportChange={(viewport) => this.setState({ viewport })}
                        >
                            {tempMarker &&
                                <Marker
                                    longitude={tempMarker.longitude}
                                    latitude={tempMarker.latitude}>
                                    <div className="marker temporary-marker"><span></span></div>
                                </Marker>
                            }
                            {
                                this.state.markers.map((marker, index) => {
                                    return (
                                        <CustomMarker
                                            key={`marker-${index}`}
                                            index={index}
                                            marker={marker}
                                        />
                                    )
                                })
                            }
                        </ReactMapGL>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Map;



// import React, { useState } from 'react'
// import MapGL, { GeolocateControl } from 'react-map-gl'
// // import config from '../config'
// import 'mapbox-gl/dist/mapbox-gl.css'

// const TOKEN = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg';

// // const TOKEN = config.REACT_APP_TOKEN
// // mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg';

// const geolocateStyle = {
//     float: 'left',
//     margin: '50px',
//     padding: '10px'
// };

// const Map = () => {


// const mapboxApiKey = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg'

// const params = {
//     country: "us"
// }

// const CustomMarker = ({ index, marker }) => {
//     return (
//         <Marker
//             longitude={marker.longitude}
//             latitude={marker.latitude}>
//             <div className="marker">
//                 <span><b>{index + 1}</b></span>
//             </div>
//         </Marker>
//     )
// };

// // let currentLat;
// // let currentLng;



// class Map extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             viewport: {
//                 latitude: 41.8781,
//                 longitude: -87.6298,
//                 zoom: 10
//             },
//             tempMarker: null,
//             markers: []
//         };

//     }

//     onSelected = (viewport, item) => {
//         this.setState({
//             viewport,
//             tempMarker: {
//                 name: item.place_name,
//                 longitude: item.center[0],
//                 latitude: item.center[1]
//             }
//         })
//     }

//     add = () => {
//         var { tempMarker } = this.state

//         this.setState(prevState => ({
//             markers: [...prevState.markers, tempMarker],
//             tempMarker: null
//         }))
//     }

//     // getCurrentLocation = () => {
//     //     if ("geolocation" in navigator) {
//     //         console.log("Available");
//     //         let currentLat=0;
//     //         let currentLng=0;
//     //         navigator.geolocation.getCurrentPosition(function(position) {
//     //             currentLat = position.coords.latitude;
//     //             currentLng = position.coords.longitude;
//     //             this.setState({
//     //                 ...prevState,
//     //                 latitude: currentLat,
//     //                 longitude: currentLng
//     //             })
//     //             // console.log(currentLat, currentLng)
//     //         })
//     //         console.log(this.state.viewport.latitude)
//     //     } else{
//     //         console.log("Not available")
//     //     }
//     // }

//     componentDidMount() {
//         //     this.getCurrentLocation()
//         if ("geolocation" in navigator) {
//             console.log("Available");
//             navigator.geolocation.getCurrentPosition(function (position) {
//                 console.log(position)
//                 // currentLat = position.coords.latitude;
//                 // currentLng = position.coords.longitude;
//                 console.log(position.coords.latitude, position.coords.longitude)
//             });
//             // console.log(currentLat, currentLng)
//         } else {
//             console.log("Location Not Available");
//         }
//     }

//     render() {
//         const { viewport, tempMarker, markers } = this.state;
//         return (
//             <Container fluid={true}>
//                 {/* <Row>
//                     <Col><h2>Mapbox Tutorial</h2></Col>
//                 </Row> */}
//                 <Row className="py-4">
//                     <Col xs={2}>
//                         <Geocoder
//                             mapboxApiAccessToken={mapboxApiKey}
//                             onSelected={this.onSelected}
//                             viewport={viewport}
//                             hideOnSelect={true}
//                             value=""
//                             queryParams={params}
//                         />
//                     </Col>
//                     <Col>
//                         {/* <Button color="primary" onClick={this.add}>Add</Button> */}
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <ReactMapGL
//                             mapboxApiAccessToken={mapboxApiKey}
//                             mapStyle="mapbox://styles/mapbox/streets-v11"
//                             {...viewport}
//                             {...mapStyle}
//                             onViewportChange={(viewport) => this.setState({ viewport })}
//                         >
//                             {tempMarker &&
//                                 <Marker
//                                     longitude={tempMarker.longitude}
//                                     latitude={tempMarker.latitude}>
//                                     <div className="marker temporary-marker"><span></span></div>
//                                 </Marker>
//                             }
//                             {
//                                 this.state.markers.map((marker, index) => {
//                                     return (
//                                         <CustomMarker
//                                             key={`marker-${index}`}
//                                             index={index}
//                                             marker={marker}
//                                         />
//                                     )
//                                 })
//                             }
//                         </ReactMapGL>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default Map;


// // import React, { useState } from 'react'
// // import MapGL, { GeolocateControl } from 'react-map-gl'
// // // import config from '../config'
// // import 'mapbox-gl/dist/mapbox-gl.css'

// // const TOKEN = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg';

// // // const TOKEN = config.REACT_APP_TOKEN
// // // mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg';

// // const geolocateStyle = {
// //     float: 'left',
// //     margin: '50px',
// //     padding: '10px'
// // };

// // const Map = () => {

// //     const [viewport, setViewPort] = useState({
// //         width: "100%",
// //         height: 900,
// //         latitude: 0,
// //         longitude: 0,
// //         zoom: 2
// //     })

// //     const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 3000 })

// //     return (
// //         <div style={{ margin: '0 auto' }}>
// //             <h1 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
// //             <MapGL
// //                 {...viewport}
// //                 mapboxApiAccessToken={TOKEN}
// //                 mapStyle="mapbox://styles/mapbox/dark-v8"
// //                 onViewportChange={_onViewportChange}
// //             >
// //                 <GeolocateControl
// //                     style={geolocateStyle}
// //                     positionOptions={{ enableHighAccuracy: true }}
// //                     trackUserLocation={true}
// //                 />
// //             </MapGL>
// //         </div>
// //     )
// // }

// // export default Map


// // import React, { Component } from "react";

// // import './App.css';
// // import mapboxgl from 'mapbox-gl';

// // mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYW1jZ3Vpbm4iLCJhIjoiY2tkdG9wandhMDU3ZTJ4cGxtaG5yd2d3aiJ9.FMU72HehweqVt3eGAhkuDg';

// // class Map extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             lng: 5,
// //             lat: 34,
// //             zoom: 2
// //         }
// //     }

// //     componentDidMount() {
// //         const map = new mapboxgl.Map({
// //             container: this.mapContainer,
// //             style: 'mapbox://styles/mapbox/streets-v11',
// //             center: [this.state.lng, this.state.lat],
// //             zoom: this.state.zoom
// //         });

// //         map.on('move', () => {
// //             this.setState({
// //                 lng: map.getCenter().lng.toFixed(4),
// //                 lat: map.getCenter().lat.toFixed(4),
// //                 zoom: map.getZoom().toFixed(2)
// //             });
// //         });
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 <div className="sidebarStyle">
// //                     <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
// //                 </div>
// //                 <div ref={el => this.mapContainer = el} className="mapContainer"></div>
// //             </div>
// //         );
// //     }

// // }

// // export default Map;
