import moment from 'moment';
import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';

type props = PressableProps & {
  imageUrl: string;
  imageStyle: string;
  viewStyle: string;
  values: {
    date: Date;
    fare: string;
    vehicleType: 'BIKE' | 'CAR' | 'AUTO';
    location: string;
    status: 'COMPLETED' | 'ONGOING' | 'CANCELLED' | 'SCHEDULED';
  };
};

export default function RidesCard({ style, imageUrl, imageStyle, viewStyle, values }: props) {
  const getColor = (color: typeof values.status): string => {
    let textColor = COLORS.BLACK;
    switch (color) {
      case 'COMPLETED':
        textColor = COLORS.SPANIS_VIRIDIAN;
        break;
      case 'SCHEDULED':
        textColor = COLORS.YELLOW_ORANGE;
        break;
      case 'ONGOING':
        textColor = COLORS.SPANIS_VIRIDIAN;
        break;
      case 'CANCELLED':
        textColor = COLORS.LUST_RED;
        break;
    }
    return textColor;
  };

  return (
    <Pressable style={style}>
      <Image style={tw`${imageStyle}`} source={{ uri: imageUrl }} />
      <View style={tw`${viewStyle}`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`font-bold text-3.75 text-[${COLORS.BLACK}]`}>
            {moment(values.date).format('ddd, MMM DD, hh:mm A')}
          </Text>
          <Text style={tw`font-medium text-3 ml-2 lowercase text-[${getColor(values.status)}]`}>
            {values.status}
          </Text>
        </View>
        <Text style={tw`font-bold text-3.75 text-[${COLORS.BLACK}]`}>₹{values.fare}</Text>
        <Text style={tw`font-normal text-3.75 mt-1.25 text-[${COLORS.BLACK}]`}>
          {values.vehicleType}
        </Text>
        <Text style={tw`font-normal text-3.75 mt-1.25 text-[${COLORS.BLACK}]`}>
          {values.location}
        </Text>
      </View>
    </Pressable>
  );
}
