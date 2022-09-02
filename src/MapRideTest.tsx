import React, { useEffect, useState, useRef } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { View, Dimensions, } from 'react-native';
import * as Location from 'expo-location';
import tw from 'twrnc'
import SuggaaMarker from './SuggaaMarker'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'


type location = {
    latitude: number, longitude: number
}

export default function MapRideTest() {

    const [myLocationn, setLocation] = useState<location>()
    const map = useRef(null)
    const [polyLines, setPolyLines] = useState<location[]>([])


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            Location.watchPositionAsync({}, result => {
                setLocation({ ...result?.coords })
            })


        })();
        getDirection()
    }, []);



    function getDirection() {
        fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=12.918510,77.520564&destination=12.930482,77.510855&key=AIzaSyBYkVZ398sQrKfkKccdpRPe_dA57lD3y3w`)
            .then(response => response.json())
            .then(data => {
                let steps = data?.routes[0]?.legs[0]?.steps
                let arrayOfCoordinates: location[] = []
                if (steps && steps.length) {
                    steps.forEach((step) => {
                        arrayOfCoordinates.push({ latitude: step.start_location.lat, longitude: step.start_location.lng })
                        arrayOfCoordinates.push({ latitude: step.end_location.lat, longitude: step.end_location.lng })
                    })
                    setPolyLines(arrayOfCoordinates)
                }
            })
            .catch(error => { })
    }

    return (
        <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center justify-center`}>
            <MapView
                followsUserLocation={true}
                zoomEnabled={true}
                initialRegion={myLocationn && { ...myLocationn, latitudeDelta: 5, longitudeDelta: 5 }}
                showsMyLocationButton
                ref={map}
                style={tw`w-[${Dimensions.get('window').width}] h-[${Dimensions.get('window').width}]`
                }>
                <SuggaaMarker noTransForm image={IMAGES.PICKUP_MARKER} coordinate={{ latitude: 12.918510, longitude: 77.520564 }} />
                <SuggaaMarker noTransForm image={IMAGES.DROP_MARKER} coordinate={{ latitude: 12.930482, longitude: 77.510855 }} />
                <Polyline
                    coordinates={[...polyLines]}
                    strokeColor="#000"
                    strokeWidth={6}
                />
            </MapView>

        </View>
    );
}
