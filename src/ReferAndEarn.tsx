import React from 'react';
import { View, Image, Text, Pressable, Share, ScrollView } from 'react-native';
import tw from 'twrnc';

import ReferCode from './ReferCode';
import SuggaButton from './SuggaButton';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

export default function ReferAndEarn() {
  const referCode = 'SUGGAAOFF25';

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: referCode,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // catch error
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`items-center p-5`}>
      <Image source={IMAGES.REFER_EARN_BANNER} style={tw`mb-7.5`} />

      <Text style={tw`text-4.5 text-center`}>Invite your friends and get {'\n'} ₹20 each </Text>

      <View style={tw`mt-6.75 mb-8.25 w-full shadow-md bg-[${COLORS.WHITE}] rounded-1.25`}>
        <View style={tw`flex-row border-0.25 rounded-t-1.25 border-[${COLORS.LIGHT_GRAY_BORDER}]`}>
          <View
            style={tw`py-5 flex-1 items-center border-r-0.25 border-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            <Text style={tw`text-4.5 text-[${COLORS.BLACK}]`}>₹0</Text>
            <Text style={tw`text-3.75 text-[${COLORS.BLACK}]`}>Earned</Text>
          </View>

          <View style={tw`py-5 flex-1 items-center`}>
            <Text style={tw`text-4.5 text-[${COLORS.BLACK}]`}>₹0</Text>
            <Text style={tw`text-3.75 text-[${COLORS.BLACK}]`}>Pending</Text>
          </View>
        </View>

        <Pressable style={tw`px-3.5 pt-4 pb-3.25 flex-row items-center`}>
          <Text style={tw`text-3.75 text-[${COLORS.SPANISH_VIRIDIAN}]`}>See all</Text>
          <View style={tw`flex-1`} />
          <Image source={IMAGES.ARROW_RIGHT_GREEN} />
        </Pressable>
      </View>

      <ReferCode code={referCode} />

      <View style={tw`h-7.5`} />

      <SuggaButton buttonType="FILLED" text="Share Code" onPress={onShare} />
    </ScrollView>
  );
}
