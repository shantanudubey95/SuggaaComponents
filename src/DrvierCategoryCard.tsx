import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type props = {
  title: string;
  description: string;
  isActive: boolean;
  category: 'NoVehicle' | 'SingleDriver' | 'FleetOwner';
  onPress: () => void;
};

export default function DriverCateogoryCard({
  title,
  description,
  isActive,
  category,
  onPress,
}: props) {
  return isActive ? (
    <Pressable
      onPress={onPress}
      style={tw`flex-row pr-2.25 pl-3.41 pb-3.25 pt-4.7 border-2 shadow-lg bg-[${COLORS.WHITE}] rounded-1.25 border-[${COLORS.SPANIS_VIRIDIAN}] my-5`}>
      <Image
        style={tw`self-center`}
        source={
          category === 'NoVehicle'
            ? IMAGES.I_DRIVE_ACTIVE
            : category === 'SingleDriver'
            ? IMAGES.I_HAVE_A_DRIVER_ACTIVE
            : IMAGES.FLEET_ACTIVE
        }
      />
      <View style={tw`self-center mt-4 flex-1 ml-5.5`}>
        <Text style={tw`text-4.5 text-[${COLORS.SPANIS_VIRIDIAN}]`}>{title}</Text>
        <View style={tw`mt-1`} />
        <Text style={tw`text-3 text-[${COLORS.SPANIS_VIRIDIAN}]`}>{description}</Text>
      </View>
      <Image style={tw`absolute right-3.5 top-3.5`} source={IMAGES.TICK_SMALL} />
    </Pressable>
  ) : (
    <Pressable
      onPress={onPress}
      style={tw`flex-row shadow-md pr-2.25 pl-3.41 pb-3.25 pt-4.7 border-2 rounded-1.25 bg-[${COLORS.WHITE}] my-5`}>
      <Image
        style={tw`self-center`}
        source={
          category === 'NoVehicle'
            ? IMAGES.I_DRIVE_INACTIVE
            : category === 'SingleDriver'
            ? IMAGES.I_HAVE_A_DRIVER_INACTIVE
            : IMAGES.FLEET_INACTIVE
        }
      />
      <View style={tw`self-center mt-4 flex-1 ml-5.5`}>
        <Text style={tw`text-4.5 text-[${COLORS.LIGHT_GRAY_BORDER}]`}>{title}</Text>
        <View style={tw`mt-1`} />
        <Text style={tw`text-3 text-[${COLORS.LIGHT_GRAY_BORDER}]`}>{description}</Text>
      </View>
    </Pressable>
  );
}
