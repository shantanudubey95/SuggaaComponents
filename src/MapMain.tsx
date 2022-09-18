import * as Location from 'expo-location';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import tw from 'twrnc';

import CurrentLocationButton from './CurrentLocationButton';
import SuggaaMarker from './SuggaaMarker';
import { withAnchorPoint } from './WithAnchorPoint';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
type location = {
  latitude: number;
  longitude: number;
};

export default function MapMain({ pickUp, drop }: { pickUp?: location; drop?: location }) {
  const [rotate, setRotatation] = useState(0);
  const [myLocationn, setLocation] = useState<location>();
  const map = useRef(null);
  const [zoom, setZoom] = useState(0);

  const transform = useMemo(() => {
    return withAnchorPoint(
      { transform: [{ rotateZ: `${rotate} deg` }] },
      { x: 0.5, y: 0.5 },
      { width: 60, height: 60 }
    );
  }, [rotate]);

  useEffect(() => {
    if (pickUp)
      goToInitialLocation({
        latitude: pickUp.latitude,
        longitude: pickUp.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5,
      });
  }, [pickUp]);

  useEffect(() => {
    if (drop)
      goToInitialLocation({
        latitude: drop.latitude,
        longitude: drop.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5,
      });
  }, [drop]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      Location.watchPositionAsync({}, (result) => {
        setLocation({ ...result?.coords });
      });
      Location.watchHeadingAsync((result) => {
        setRotatation(result.magHeading);
      });
    })();
  }, []);

  const onMapChange = async () => {
    // const { zoom } = await map?.current?.getCamera()
    // if (zoom < 18) {
    //     setZoom(zoom)
    // }
  };
  function goToInitialLocation(region?: region) {
    const initialRegion = region
      ? region
      : myLocationn
      ? { ...myLocationn, latitudeDelta: 0, longitudeDelta: 0 }
      : null;
    if (initialRegion) {
      initialRegion['latitudeDelta'] = 0.005;
      initialRegion['longitudeDelta'] = 0.005;
      map?.current?.animateToRegion(initialRegion, 2000);
    }
  }

  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center justify-center`}>
      <MapView
        followsUserLocation
        zoomEnabled
        onMapReady={goToInitialLocation}
        initialRegion={myLocationn && { ...myLocationn, latitudeDelta: 5, longitudeDelta: 5 }}
        showsMyLocationButton
        ref={map}
        onRegionChange={() => onMapChange()}
        /*minZoomLevel={20}*/
        /*region={{ ...myLocationn, longitudeDelta: 0, latitudeDelta: 0 }}*/
        style={tw`w-[${Dimensions.get('window').width}] h-[${Dimensions.get('window').width}]`}>
        {myLocationn && (
          <SuggaaMarker
            currentLocation
            noTransForm
            transformObj={transform}
            image={IMAGES.MY_LOCATION_MARKER}
            coordinate={{ latitude: myLocationn?.latitude, longitude: myLocationn?.longitude }}
          />
        )}
        {pickUp && <SuggaaMarker noTransForm image={IMAGES.PICKUP_MARKER} coordinate={pickUp} />}
        {drop && <SuggaaMarker noTransForm image={IMAGES.DROP_MARKER} coordinate={drop} />}
        <SuggaaMarker
          zoom={zoom}
          transformObj={transform}
          image={IMAGES.BIKE_MARKER}
          coordinate={{ latitude: 12.9162028, longitude: 77.5210518 }}
        />
        <SuggaaMarker
          zoom={zoom}
          transformObj={transform}
          image={IMAGES.AUTO_MARKER}
          coordinate={{ latitude: 12.91688410763785, longitude: 77.52073296875786 }}
        />
        <SuggaaMarker
          zoom={zoom}
          transformObj={transform}
          image={IMAGES.HATCH_MARKER}
          coordinate={{ latitude: 12.916733188211659, longitude: 77.52006352433035 }}
        />
      </MapView>
      <View style={tw`absolute bottom-7.75 right-5`}>
        <CurrentLocationButton
          style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
          onPress={() => goToInitialLocation()}
          ImageId={IMAGES.CURENT_LOCATION}
        />
      </View>
    </View>
  );
}
