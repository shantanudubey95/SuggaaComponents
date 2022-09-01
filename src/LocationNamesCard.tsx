import React from 'react';
import { Pressable, Text, Image, View } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';

type props = {
  imageId: number;
  AddressTitle: string;
  AddressFull: string;
  distance: number;
};

export default function LocationNamesCard({ imageId, AddressTitle, AddressFull, distance }: props) {
  return (
    <Pressable style={tw`flex-row bg-[${COLORS.WHITE}]`}>
      <View style={tw`mr-2 items-center`}>
        <Image source={imageId} />
        <Text style={tw`text-2 text-[${COLORS.SPANISH_GREY}]`}>{distance} km</Text>
      </View>
      <View style={tw`mr-2 pb-3.75 flex-1`}>
        <Text numberOfLines={1} style={tw`text-3.75 text-[${COLORS.BLACK}]`}>
          {AddressTitle}
        </Text>
        <View style={tw`mt-1.25`} />
        <Text numberOfLines={1} style={tw`text-3 text-[${COLORS.SPANISH_GREY}]`}>
          {AddressFull}
        </Text>
      </View>
    </Pressable>
  );
}
