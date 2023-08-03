

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
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
                >
                    <Marker position={{ lat: 35.3556617, lng: -87.3021094 }} />
                </GoogleMap>
            )}
        </div>
    );
};


