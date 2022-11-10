import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Marker } from 'react-native-maps';
import tw from 'twrnc';

import CurrentLocation from './CurrentLocation';

type MarkerProps = {
  image: number;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  noTransForm?: boolean;
  transformObj?: any;
  zoom?: number;
  currentLocation?: boolean;
};

/** A function that generates the centerOffset prop based on the anchor value */
const getCenterOffsetForAnchor = (
  anchor: { x: number; y: number },
  markerWidth: number,
  markerHeight: number
): { x: number; y: number } => ({
  x: markerWidth * 0.5 - markerWidth * anchor.x,
  y: markerHeight * 0.5 - markerHeight * anchor.y,
});

/** Marker's width */
const MARKER_WIDTH = 50;
/** Marker's height */
const MARKER_HEIGHT = 70; // marker height

/** Customizable anchor prop - Specify your desired anchor adjustements here */
const ANCHOR = { x: 0.5, y: 0.5 }; // in my case I customized this based on marker dimensions like this: { x: 0.5, y: 1 - 10 / MARKER_HEIGHT } lifting the marker up a bit
/** auto generated centerOffset prop based on the anchor property */
const CENTEROFFSET = getCenterOffsetForAnchor(ANCHOR, MARKER_WIDTH, MARKER_HEIGHT);

export default function SuggaaMarker({
  image,
  coordinate,
  transformObj,
  noTransForm,
  zoom,
  currentLocation,
}: MarkerProps) {
  const [imWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  // useEffect(() => {
  //     if (imWidth) setImgWidth(imWidth - 2)
  //     if (imWidth) setImgHeight(imgHeight - 2)
  // }, [zoom])

  return (
    <Marker
      tracksInfoWindowChanges
      anchor={ANCHOR}
      centerOffset={CENTEROFFSET}
      coordinate={coordinate}>
      {currentLocation ? (
        <View style={tw`py-5`}>
          <CurrentLocation />
        </View>
      ) : (
        <Image
          /*onLayout={(event) => (setImgWidth(event.nativeEvent.layout.width), setImgHeight(event.nativeEvent.layout.height))}*/ style={{
            ...(imWidth && { width: imWidth, height: imgHeight }),
            ...(!noTransForm && transformObj),
            resizeMode: 'contain',
          }}
          source={image}
        />
      )}
    </Marker>
  );
}
