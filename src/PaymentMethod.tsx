import React from 'react';
import { GestureResponderEvent, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

import TextSemiBold22 from './Typography/TextSemiBold22';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
import TextMedium25 from './Typography/TextMedium25';

type Props = {
  price: number;
  onPress: (event: GestureResponderEvent) => void;
};

const Payment = (props: Props) => {
  return (
    <View style={tw`py-3.5 px-9 rounded-md shadow-lg bg-white mt-8 justify-evenly items-center`}>
      <TextSemiBold22>Total Fare ₹{props.price}</TextSemiBold22>
      <View style={tw`flex-row items-center`}>
        <Image source={IMAGES.UPI} />
        <Image source={IMAGES.GPAY} />
        <Image source={IMAGES.PHONEPAY} />
        <Image source={IMAGES.VISA} />
        <Image source={IMAGES.MASTERCARD} />
      </View>
      <Pressable
        style={tw`px-11.25 py-1.25 bg-[${COLORS.SPANIS_VIRIDIAN}] rounded-md`}
        onPress={props.onPress}>
        <TextMedium25 style={tw`text-white`}>Pay ₹{props.price} now</TextMedium25>
      </Pressable>
    </View>
  );
};

export default Payment;
