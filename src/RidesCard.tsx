import moment from 'moment';
import React from 'react';
import { Pressable, View, Image } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import TextMedium15 from './Typography/TextMedium15';
import TextRegular12 from './Typography/TextRegular12';
import TextRegular15 from './Typography/TextRegular15';
import * as COLORS from './config/colors';

type props = PressableProps & {
  imageUrl: string;
  values: {
    date: Date;
    fare: string;
    vehicleType: 'BIKE' | 'CAR' | 'AUTO';
    location: string;
    status: 'Completed' | 'Ongoing' | 'Cancelled' | 'Scheduled';
  };
};

export default function RidesCard({ imageUrl, values }: props) {
  const getColor = (color: typeof values.status): string => {
    let textColor = COLORS.BLACK;
    switch (color) {
      case 'Completed':
        textColor = COLORS.SPANISH_VIRIDIAN;
        break;
      case 'Scheduled':
        textColor = COLORS.YELLOW_ORANGE;
        break;
      case 'Ongoing':
        textColor = COLORS.SPANISH_VIRIDIAN;
        break;
      case 'Cancelled':
        textColor = COLORS.LUST_RED;
        break;
    }
    return textColor;
  };

  return (
    <Pressable style={tw`w-full p-2 flex-row`}>
      <Image style={tw`w-11.65 h-11.65 mt-2 rounded-full`} source={{ uri: imageUrl }} />
      <View style={tw`ml-4 flex-1`}>
        <View style={tw`flex-row items-center justify-between `}>
          <TextMedium15 style={tw`text-[${COLORS.BLACK}]`}>
            {moment(values.date).format('ddd, MMM DD, hh:mm A')}
          </TextMedium15>
          <TextRegular12 style={tw`text-[${getColor(values.status)}]`}>
            {values.status}
          </TextRegular12>
        </View>
        <TextMedium15 style={tw`text-[${COLORS.BLACK}]`}>₹{values.fare}</TextMedium15>
        <TextRegular15 style={tw` text-[${COLORS.BLACK}]`}>{values.vehicleType}</TextRegular15>
        <TextRegular15 style={tw`text-[${COLORS.BLACK}]`}>{values.location}</TextRegular15>
      </View>
    </Pressable>
  );
}
