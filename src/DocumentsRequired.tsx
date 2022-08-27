import React from 'react';
import { Image, Text, View } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
type props = {
  title: string;
  description: string;
};
export default function DocumentsRequired({ title, description }: props) {
  return (
    <View style={tw`flex-row items-center self-stretch`}>
      <Image source={IMAGES.TICK_MARK} />
      <View style={tw`pl-6.5 flex-1`}>
        <Text style={tw`text-4.5 text-[${COLORS.BLACK}]`}>{title}</Text>
        <View style={tw`h-2.5`} />
        <Text style={tw`text-3.25 text-[${COLORS.GRANITE_GRAY}]`}>{description}</Text>
      </View>
    </View>
  );
}
