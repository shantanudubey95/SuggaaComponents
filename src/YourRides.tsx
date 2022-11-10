import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import tw from 'twrnc';

import SuggaButton from './SuggaButton';
import * as COLORS from './config/colors';

export default function Rides() {
  const payCards = (name: string, value?: string, bolder?: boolean, color?: string) => {
    return (
      <View style={tw`flex-row items-center mb-3.75`}>
        <View style={tw`flex-1`}>
          <Text
            style={tw`text-[${color ? color : COLORS.BLACK}] ${
              bolder ? 'font-bold text-3.75' : ''
            }`}>
            {name}
          </Text>
        </View>
        <Text
          style={tw`text-[${color ? color : COLORS.BLACK}] ${bolder ? 'font-bold text-3.75' : ''}`}>
          {value}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={tw`p-5`}>
      <View style={tw`h-42 shadow-md w-full bg-[${COLORS.WHITE}] rounded-1.25`}>
        <Text style={tw`text-3 text-[${COLORS.SPANISH_VIRIDIAN}] absolute left-5 bottom-2.5`}>
          Completed
        </Text>
      </View>

      <View style={tw`h-7.25`} />

      <View>
        <View style={tw`flex-row items-center`}>
          <View style={tw`w-4 h-4 bg-[${COLORS.SPANISH_VIRIDIAN}] rounded-full mr-2.5`} />
          <Text style={tw`text-3.75 text-[${COLORS.BLACK}]`}>
            Birsa Munda Airport, Ranchi, Hurlung, ...
          </Text>
        </View>
        <View style={tw`h-4.5 w-0.25 ml-1.75 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-start`} />

        <View style={tw`flex-row items-center`}>
          <View style={tw`w-4 h-4 bg-[${COLORS.LUST_RED}] rounded-full mr-2.5`} />
          <Text style={tw`text-3.75 text-[${COLORS.BLACK}]`}>
            Birsa Munda Airport, Ranchi, Hurlung, ...
          </Text>
        </View>
      </View>

      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-5`} />

      {payCards('Pay Mode', 'Cash', true, COLORS.SPANISH_VIRIDIAN)}
      {payCards('Bill Detail')}
      {payCards('Ride Fare', '₹ 94.5')}
      {payCards('Total Platform Charges', '₹ 94.5')}
      {payCards('Coupon Savings', '₹ 94.5')}
      {payCards('Taxes', '₹ 94.5')}

      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] mb-2.25`} />

      {payCards('Total Payable', '₹ 117', true)}

      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}>
          <SuggaButton onPress={() => alert('add function here')} text="Mail" buttonType="FILLED" />
        </View>
        <View style={tw`w-5`} />
        <View style={tw`flex-1`}>
          <SuggaButton
            onPress={() => alert('add function here')}
            text="Support"
            buttonType="BORDER"
          />
        </View>
      </View>
    </ScrollView>
  );
}
