import { decode } from '@googlemaps/polyline-codec';
import * as Location from 'expo-location';
import React, { useEffect, useState, useRef } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import tw from 'twrnc';

import SuggaaMarker from './SuggaaMarker';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type location = {
  latitude: number;
  longitude: number;
};

export default function MapRideTest() {
  const [myLocationn, setLocation] = useState<location>({
    latitude: 12.91851,
    longitude: 77.520564,
  });
  const map = useRef(null);
  const [polyLines, setPolyLines] = useState<location[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      Location.watchPositionAsync({}, (result) => {
        setLocation({ ...result?.coords });
      });
    })();
    getDirection();
  }, []);

  function getDirection() {
    fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=12.918510,77.520564&destination=12.929481,77.544475&key=AIzaSyBYkVZ398sQrKfkKccdpRPe_dA57lD3y3w`
    )
      .then((response) => response.json())
      .then((data) => {
        const points = data?.routes[0]?.overview_polyline?.points;
        const decodedPoints = decode(points, 5);
        const coords = decodedPoints.map((point) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        setPolyLines(coords);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center justify-center`}>
      <MapView
        followsUserLocation
        zoomEnabled
        initialRegion={{ ...myLocationn, latitudeDelta: 1, longitudeDelta: 1 }}
        showsMyLocationButton
        ref={map}
        style={tw`w-[${Dimensions.get('window').width}] h-[${Dimensions.get('window').width}]`}>
        <SuggaaMarker
          noTransForm
          image={IMAGES.PICKUP_MARKER}
          coordinate={{ latitude: 12.91851, longitude: 77.520564 }}
        />
        {polyLines && polyLines.length ? (
          <SuggaaMarker
            noTransForm
            image={IMAGES.HATCH_MARKER}
            coordinate={polyLines[polyLines.length - 1]}
          />
        ) : null}
        <Polyline coordinates={polyLines} strokeColor={COLORS.BLACK} strokeWidth={2} />
      </MapView>
    </View>
  );
}
