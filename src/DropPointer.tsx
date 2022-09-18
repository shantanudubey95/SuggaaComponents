import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import RippleAnimation from './RippleAnimation';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

export default function DropPointer() {
  return (
    <View style={tw`items-center justify-center`}>
      <Image source={IMAGES.LOCATION_CIRCLE_RED} style={tw`absolute`} resizeMode="contain" />
      <View>
        <RippleAnimation size={10} color={COLORS.LUST_RED_LIGHT} />
      </View>
    </View>
  );
}
