import React, { useEffect, useState, useRef, useMemo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Text, View, Dimensions, } from 'react-native';
import * as Location from 'expo-location';
import tw from 'twrnc'
import { withAnchorPoint } from './WithAnchorPoint';
import SuggaaMarker from './SuggaaMarker'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import CurrentLocationButton from './CurrentLocationButton';

export default function MapMain() {

    const [rotate, setRotatation] = useState(0)
    const [myLocationn, setLocation] = useState({ latitude: 0, longitude: 0 })
    const map = useRef(null)
    const [zoom, setZoom] = useState(0)

    const transform = useMemo(() => {
        return withAnchorPoint({ transform: [{ rotateZ: `${rotate} deg` }], }, { x: 0.5, y: 0.5 }, { width: 60, height: 60 });
    }, [rotate]);


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }
            Location.watchPositionAsync({}, result => {
                setLocation(result.coords)
            })
            Location.watchHeadingAsync((result) => {
                setRotatation(result.magHeading)

            });

        })();
    }, []);


    const onMapChange = async () => {
        // const { zoom } = await map?.current?.getCamera()
        // if (zoom < 18) {
        //     setZoom(zoom)
        // }
    }

    return (
        <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center justify-center`}>
            <MapView showsMyLocationButton ref={map} onRegionChange={() => onMapChange()} /*minZoomLevel={20}*/ /*region={{ ...myLocationn, longitudeDelta: 0, latitudeDelta: 0 }}*/ style={tw`w-[${Dimensions.get('window').width}] h-[${Dimensions.get('window').width}]`}  >
                <SuggaaMarker currentLocation noTransForm transformObj={transform} image={IMAGES.MY_LOCATION_MARKER} coordinate={myLocationn} />
                <SuggaaMarker zoom={zoom} transformObj={transform} image={IMAGES.BIKE_MARKER} coordinate={{ latitude: 12.9162028, longitude: 77.5210518 }} />
                <SuggaaMarker zoom={zoom} transformObj={transform} image={IMAGES.AUTO_MARKER} coordinate={{ latitude: 12.91688410763785, longitude: 77.52073296875786 }} />
                <SuggaaMarker zoom={zoom} transformObj={transform} image={IMAGES.HATCH_MARKER} coordinate={{ latitude: 12.916733188211659, longitude: 77.52006352433035 }} />
            </MapView>
            <View style={tw`absolute bottom-7.75 right-5`}>
                <CurrentLocationButton
                    style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
                    onPress={() => alert('add function here')}
                    ImageId={IMAGES.CURENT_LOCATION} />
            </View>
        </View>
    );
}
