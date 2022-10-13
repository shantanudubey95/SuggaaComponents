import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import ReferCode from './ReferCode';
import TextRegular12 from './Typography/TextRegular12';
import TextRegular15 from './Typography/TextRegular15';
import TextSemiBold22 from './Typography/TextSemiBold22';
import * as COLORS from './config/colors';

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
        <View style={tw`flex-row items-center w-full justify-between`}>
          <TextSemiBold22>{title}</TextSemiBold22>
          <View style={tw`h-1.25`} />
          <TextRegular15 style={tw`text-[${COLORS.BLUE}] ml-`}>Apply</TextRegular15>
        </View>
        <TextRegular15>{description}</TextRegular15>
        <View style={tw`h-1.25`} />
        <TextRegular12 style={tw`text-[${COLORS.LUST_RED}]`}>{validity}</TextRegular12>
      </View>
      <View style={tw`mx-1`}>
        <ReferCode code="SUGGAA REF25" background={COLORS.WHITE} />
      </View>
    </View>
  );
}
