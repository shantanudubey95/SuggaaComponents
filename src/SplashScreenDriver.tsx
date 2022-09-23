import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import TextSemiBold22 from './Typography/TextSemiBold22';
import TextRegular12 from './Typography/TextRegular12';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

export default function SplashScreenDriver() {
  return (
    <View style={tw`flex-1 p-9.5 items-center justify-center bg-[${COLORS.WHITE}]`}>
      <View style={tw`flex-1  items-center justify-end`}>
        <Image source={IMAGES.SPLASH_SCREEN_LOGO} resizeMode="contain" />

        <View
          style={tw`bg-[${COLORS.SPANISH_VIRIDIAN}] items-center justify-center w-32.75 h-8.75 rounded-md mt-2.75 absolute bottom--11.5 right-0`}>
          <TextSemiBold22 style={tw`text-[${COLORS.WHITE}]`}>Sathi</TextSemiBold22>
        </View>
      </View>

      <View style={tw`flex-1 flex-row items-end justify-center`}>
        <View style={tw`flex-1 flex-row items-center justify-center`}>
          <TextRegular12>Made In</TextRegular12>
          <View style={tw`w-1`} />
          <Image source={IMAGES.INDIAN_FLAG} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
}
