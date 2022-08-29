import React from 'react';
import { GestureResponderEvent, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';

const VISA = require('../assets/Visa.png');
const GPAY = require('../assets/gpay.png');
const MASTERCARD = require('../assets/mastercard.png');
const PHONEPAY = require('../assets/phonepay.png');
const UPI = require('../assets/upi.png');

type Props = {
  price: number;
  onPress: (event: GestureResponderEvent) => void;
};

const Payment = (props: Props) => {
  return (
    <View style={tw`w-full h-38 rounded-md shadow-lg bg-white mt-8 justify-evenly items-center`}>
      <Text style={tw`font-semibold text-2xl`}>Total Fare ₹{props.price}</Text>
      <View style={tw`flex-row items-center`}>
        <Image source={UPI} />
        <Image source={GPAY} />
        <Image source={PHONEPAY} />
        <Image source={VISA} />
        <Image source={MASTERCARD} />
      </View>
      <Pressable
        style={tw`px-11.25 py-1.25 bg-[${COLORS.SPANIS_VIRIDIAN}] rounded-md`}
        onPress={props.onPress}>
        <Text style={tw`text-2xl font-medium text-white`}>Pay ₹{props.price} now</Text>
      </Pressable>
    </View>
  );
};

export default Payment;
