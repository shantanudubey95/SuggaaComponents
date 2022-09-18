import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

export default function DrawerComponent(props: DrawerContentComponentProps) {
  return (
    <View style={tw`flex-1`}>
      <DrawerContentScrollView {...props} contentContainerStyle={tw`bg-[${COLORS.WHITE}]`}>
        <View style={tw`p-5 bg-[${COLORS.SPANIS_VIRIDIAN}]`}>
          <Image source={IMAGES.PROFILE_ICON} />
          <View style={tw`flex-row items-center mt-2.75`}>
            <Text style={tw`text-5 text-[${COLORS.WHITE}]`}>Anurag Gautam</Text>
            <View style={tw`flex-1`} />
            <Image source={IMAGES.RIGHT_ARROW} />
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
