// import { Map } from '@googlemaps/react-wrapper'
// import React from 'react';



// export const Maps = ({ AIzaSyAbR2G9YeiNKei8UKjdQynByuXsThoOCpU }) => {
//     return (
//         <div style={{ width: '100%', height: '400px' }}>
//             <Map
//                 apiKey={AIzaSyAbR2G9YeiNKei8UKjdQynByuXsThoOCpU}
//                 defaultZoom={8}
//                 defaultCenter={{ lat: 35.32369, lng: -87.3036262 }}
//             />
//         </div>
//     );
// };
// import React from 'react';
// import { Map } from '@googlemaps/react-wrapper';

// export const Maps = ({ apiKey }) => {
//     return (
//         <div style={{ width: '100%', height: '400px' }}>
//             <Map
//                 apiKey={apiKey}
//                 defaultZoom={8}
//                 defaultCenter={{ lat: 35.32369, lng: -87.3036262 }}
//             />
//         </div>
//     );
// };

// import React from 'react';
// // import { Map } from '@googlemaps/react-wrapper';
// import { GoogleMap } from '@react-google-maps/api';

// const Maps = ({ apiKey }) => {
//     return (
//         <div style={{ width: '100%', height: '400px' }}>
//             <GoogleMap apiKey={apiKey} defaultZoom={8} defaultCenter={{ lat: '35.32369', lng: '-87.3036262' }} />
//         </div>
//     );
// };

// export { Maps }; // Exporting the Maps component as a named export

import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"


export const Maps = (props) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: props.googleMapsApiKey,
    });
    const center = useMemo(() => ({ lat: 35.32369, lng: -87.3036262 }), []);

    return (
        <div className="map-app">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '300px' }}
                    center={center}
                    zoom={10}
                />
            )}
        </div>
    );
};


