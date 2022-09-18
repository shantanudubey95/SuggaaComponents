import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import RippleAnimation from './RippleAnimation';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

export default function CurrentLocation() {
  return (
    <View style={tw`items-center justify-center`}>
      <Image source={IMAGES.LOCATION_CIRCLE} style={tw`absolute bottom-0`} resizeMode="contain" />
      <View style={tw`absolute bottom-0`}>
        <RippleAnimation size={10} color={COLORS.BLUE} />
      </View>
      <Image source={IMAGES.MY_LOCATION_MARKER} resizeMode="contain" />
    </View>
  );
}
