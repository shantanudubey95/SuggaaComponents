import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import tw from 'twrnc';

import SuggaaMarker from './SuggaaMarker';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type location = {
  latitude: number;
  longitude: number;
};
export default function MapRoute({
  pickUp,
  drop,
  style,
  mapStyle,
}: {
  pickUp: location;
  drop: location;
  style: string;
  mapStyle: string;
}) {
  const map = useRef(null);

  return (
    <View style={tw`${style}`}>
      <MapView
        ref={map}
        region={{
          latitude: 12.9169211,
          longitude: 77.5206152,
          longitudeDelta: 0,
          latitudeDelta: 0,
        }}
        style={tw`${mapStyle}`}>
        <SuggaaMarker
          noTransForm
          transformObj={null}
          image={IMAGES.PICKUP_MARKER}
          coordinate={pickUp}
        />
        <SuggaaMarker
          noTransForm
          transformObj={null}
          image={IMAGES.DROP_MARKER}
          coordinate={drop}
        />
        <Polyline
          geodesic
          coordinates={[pickUp, drop]}
          strokeColor={COLORS.BLACK}
          strokeWidth={2}
        />
      </MapView>
      <Text style={tw`text-3 text-[${COLORS.SPANISH_VIRIDIAN}] absolute left-5 bottom-2.5`}>
        Completed
      </Text>
    </View>
  );
}
