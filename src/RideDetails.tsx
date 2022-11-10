import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from './Typography/TextRegular12';
import TextRegular15 from './Typography/TextRegular15';
import * as COLORS from './config/colors';
type Props = {
  pickup_location: string;
  drop_location: string;
};

const RideDetails = (props: Props) => {
  return (
    <View style={tw`w-full h-16  mt-3 justify-between items-center`}>
      <View style={tw`flex-row justify-between w-full`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`h-4 w-4 rounded-2xl bg-[${COLORS.SPANISH_VIRIDIAN}] mr-2.5`} />
          <TextRegular12>{props.pickup_location}</TextRegular12>
        </View>
        <TextRegular15 style={tw`text-[${COLORS.BLUE}]`}>Edit</TextRegular15>
      </View>
      <View style={tw`flex-row justify-between w-full`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`h-4 w-4 rounded-2xl bg-[${COLORS.LUST_RED}] mr-2.5`} />
          <TextRegular12>{props.drop_location}</TextRegular12>
        </View>
        <TextRegular15 style={tw`text-[${COLORS.BLUE}]`}>Edit</TextRegular15>
      </View>
    </View>
  );
};

export default RideDetails;
