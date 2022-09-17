import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import ReferCode from './ReferCode';

type props = {
  title: string;
  description: string;
  validity: string;
  applyAction: () => void;
};

export default function CouponCard({ title, description, validity, applyAction }: props) {
  return (
    <View style={tw`bg-[${COLORS.ANTI_FLASH_WHITE}] py-1.75 rounded-1.25`}>

      <View style={tw`mx-5.75 mb-4.25`}>

        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-[${COLORS.BLACK}] flex-1 text-6.25 font-bold`}>{title}</Text>
          <View style={tw`h-1.25`} />
          <Text style={tw`text-[${COLORS.BLUE}]`} onPress={applyAction}>Apply</Text>
        </View>

        <Text style={tw`text-[${COLORS.BLACK}] text-3`} onPress={applyAction}>{description}</Text>
        <View style={tw`h-1.25`} />
        <Text style={tw`text-[${COLORS.LUST_RED}] text-3.75`} onPress={applyAction}>{validity}</Text>
      </View>
      <View style={tw`mx-1`}>
        <ReferCode code="SUGGAREF25" background={COLORS.WHITE} />
      </View>
    </View>
  );
}
