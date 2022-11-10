import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type props = {
  message: string;
  action1: () => void;
  action2: () => void;
};

export default function UploadCard({ message, action1, action2 }: props) {
  return (
    <Pressable
      style={tw`bg-[${COLORS.WHITE}] rounded-1.25 items-center py-0.75 shadow-md self-start max-w-25`}>
      <Image resizeMode="contain" source={IMAGES.UPLOADED_TICK} />
      <View style={tw`px-2.5 py-1.25`}>
        <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3.75 text-left`}>
          {message}
        </Text>
      </View>
      <View style={tw`flex-row`}>
        <Pressable onPress={action1} style={tw`ml-2.5`}>
          <Image resizeMode="contain" source={IMAGES.EYE} />
        </Pressable>
        <Pressable onPress={action2} style={tw`ml-2.5`}>
          <Image resizeMode="contain" source={IMAGES.DELETED} />
        </Pressable>
      </View>
    </Pressable>
  );
}
