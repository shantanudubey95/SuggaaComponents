import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

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
          <View style={tw`h-4 w-4 rounded-2xl bg-[${COLORS.SPANIS_VIRIDIAN}] mr-2.5`} />
          <Text style={tw`font-normal text-base`}>{props.pickup_location}</Text>
        </View>
        <Text style={tw`text-[${COLORS.BLUE}] font-normal text-base`}>Edit</Text>
      </View>
      <View style={tw`flex-row justify-between w-full`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`h-4 w-4 rounded-2xl bg-[${COLORS.LUST_RED}] mr-2.5`} />
          <Text style={tw`font-normal text-base`}>{props.drop_location}</Text>
        </View>
        <Text style={tw`text-[${COLORS.BLUE}] font-normal text-base`}>Edit</Text>
      </View>
    </View>
  );
};

export default RideDetails;
