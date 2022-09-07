import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';

type Option = 'Online' | 'Trip' | 'Earning';

interface props {
  isActive: boolean;
  details: { title: Option; value: number }[];
}

const RideDetailBox = ({ details, isActive }: props) => {
  return (
    <View style={tw`flex-row w-full justify-around`}>
      {details.map((detail, index) => (
        <View key={index} style={tw`h-23 w-23 rounded-md shadow-md bg-white`}>
          <View style={tw`justify-center items-center flex-1 bg-[${COLORS.WHITE} rounded-t-md`}>
            {detail.title === 'Online' ? (
              <Text style={tw`text-base`}>{detail.value} min</Text>
            ) : detail.title === 'Trip' ? (
              <Text style={tw`text-base`}>{detail.value}</Text>
            ) : (
              <Text style={tw`text-base`}>₹ {detail.value}</Text>
            )}
          </View>
          <View
            style={tw`justify-center items-center flex-1 rounded-b border-[${
              COLORS.SPANIS_VIRIDIAN
            }] bg-[${isActive === false ? COLORS.SPANIS_VIRIDIAN : COLORS.LIGHT_GRAY_BORDER}]`}>
            <Text style={tw`text-lg text-[${COLORS.WHITE}] font-semibold`}>{detail.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RideDetailBox;
