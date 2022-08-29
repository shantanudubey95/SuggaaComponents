import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
interface Props {
  ride_type: 'City' | 'Outstation';
  onpress: () => void;
}

const SelectRide = ({ ride_type, onpress }: Props) => {
  return (
    <Pressable
      onPress={onpress}
      style={tw`w-35.25 h-12.5 flex-row rounded-md bg-[${COLORS.SPANIS_VIRIDIAN}]`}>
      <View style={tw` w-12.5 border-2 rounded-l-md border-[${COLORS.SPANIS_VIRIDIAN}] bg-white`}>
        {ride_type === 'City' ? (
          <Image source={IMAGES.ASSEST2} />
        ) : (
          <Image source={IMAGES.ASSEST3} />
        )}
      </View>
      <View style={tw`justify-center items-center w-2/3`}>
        <Text style={tw`font-medium text-white text-base`}>{ride_type}</Text>
      </View>
    </Pressable>

    // }
  );
};

export default SelectRide;
