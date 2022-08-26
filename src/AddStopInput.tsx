import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
type props = {
  text: string;
  onPress: () => void;
  onValue: (stop: string) => void;
  clearInput: () => void;
};

export default function AddStopInput({ onPress, clearInput, onValue, text }: props) {
  return (
    <View style={tw`flex-row`}>
      <View
        style={tw`h-12 pl-3.5 pr-1.5 pt-0.75 pb-1 shadow-md bg-[${COLORS.WHITE}] rounded-1.25 flex-1`}>
        <View style={tw`pl-3.25`}>
          <Text style={tw`text-[${COLORS.LUST_RED}] text-3`}>Add Stop</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <View style={tw`h-1.5 w-1.5 rounded-full mr-2 bg-[${COLORS.LUST_RED}]`} />
          <TextInput
            value={text}
            onChangeText={onValue}
            style={tw`text-[${COLORS.BLACK}] text-3.75 flex-1`}
          />
        </View>
      </View>

      <Pressable
        onPress={clearInput}
        style={tw`h-12 bg-[${COLORS.WHITE}] rounded-1.25 justify-center ml-1.5 shadow-md px-2`}>
        <Image source={IMAGES.DLETE_ICON} />
      </Pressable>
    </View>
  );
}
