import React, { useEffect, useState, useRef, useMemo } from 'react';
import MapView from 'react-native-maps';
import { Text, View, Dimensions, } from 'react-native';
import tw from 'twrnc'
import SuggaaMarker from './SuggaaMarker'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'

type location = {
    latitude: number,
    longitude: number,
}
export default function MapRoute({ pickUp, drop, style }: { pickUp: location, drop: location, style: string }) {

    const map = useRef(null)

    return (

        <View style={tw`${style}`}>
            <MapView ref={map} region={{ latitude: 12.9169211, longitude: 77.5206152, longitudeDelta: 0, latitudeDelta: 0 }} style={tw`${style}`} >
                <SuggaaMarker noTransForm transformObj={null} image={IMAGES.PICKUP_MARKER} coordinate={pickUp} />
                <SuggaaMarker noTransForm transformObj={null} image={IMAGES.DROP_MARKER} coordinate={drop} />
            </MapView>
            <Text style={tw`text-3 text-[${COLORS.SPANIS_VIRIDIAN}] absolute left-5 bottom-2.5`}>
                Completed
            </Text>
        </View>

    );
}
