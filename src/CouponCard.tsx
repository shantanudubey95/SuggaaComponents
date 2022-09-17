import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import ReferCode from './ReferCode';
import SuggaaText from './SuggaaText';

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
          <SuggaaText type='semibold' text={title} style={tw`text-[${COLORS.BLACK}] flex-1 text-6.25`} />
          <View style={tw`h-1.25`} />
          <SuggaaText onPress={applyAction} type='regular' text='Apply' style={tw`text-[${COLORS.BLUE}]`} />
        </View>
        <SuggaaText type='regular' text={description} style={tw`text-[${COLORS.BLACK}] text-3`} />
        <View style={tw`h-1.25`} />
        <SuggaaText type='regular' text={validity} style={tw`text-[${COLORS.LUST_RED}] text-3.75`} />
      </View>
      <View style={tw`mx-1`}>
        <ReferCode code="SUGGAREF25" background={COLORS.WHITE} />
      </View>
    </View>
  );
}
