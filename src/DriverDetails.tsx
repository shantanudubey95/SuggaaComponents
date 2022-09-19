import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
import TextMedium15 from './Typography/TextMedium15';
import TextSemiBold15 from './Typography/TextSemiBold15';
import TextSemiBold18 from './Typography/TextSemiBold18';
import TextSemiBold20 from './Typography/TextSemiBold20';
type Props = {
  driver_name: string;
  car_number: string;
  car_name: string;
  rating: number;
  driver_image: string;
};

const DriverDetails = (props: Props) => {
  return (
    <>
      <View style={tw`justify-center items-end`}>
        <View
          style={tw`w-9/10 h-9.25 bg-[${COLORS.SPANIS_VIRIDIAN}] flex-row-reverse rounded-md items-center`}>
          <TextSemiBold20 style={tw`text-white mr-1.75`}>{props.driver_name}</TextSemiBold20>
        </View>
        <View style={tw`w-7/10 items-end justify-between flex-row`}>
          <View style={tw`flex-row items-center`}>
            <TextMedium15>{props.rating}</TextMedium15>
            <Image source={require('../assets/Star.png')} style={tw`h-8 w-8`} />
          </View>
          <View style={tw`items-end`}>
            <TextSemiBold18 style={tw`mr-1.75`}>{props.car_number}</TextSemiBold18>
            <TextSemiBold15 style={tw`mr-1.75`}>{props.car_name}</TextSemiBold15>
          </View>
        </View>
      </View>
      <Image source={IMAGES.PIC26} style={tw`absolute h-22.75 w-22.75`} />
    </>
  );
};

export default DriverDetails;
