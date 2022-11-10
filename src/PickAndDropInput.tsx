import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type props = {
  inputTitle: 'Pickup' | 'Drop';
  inputText: string;
  onValueChange: (address: string) => void;
  clearInput: () => void;
};

export default function PickAndDropInput({
  clearInput,
  onValueChange,
  inputText,
  inputTitle,
}: props) {
  return (
    <View
      style={tw`h-12 pl-3.5 pr-1.5 pt-0.75 pb-1 shadow-md bg-[${COLORS.WHITE}] rounded-1.25 w-full justify-center`}>
      <View style={tw`pl-3.25`}>
        <Text
          style={tw`text-[${
            inputTitle === 'Pickup' ? COLORS.SPANISH_VIRIDIAN : COLORS.LUST_RED
          }] text-3`}>
          {inputTitle}
        </Text>
      </View>
      <View style={tw`flex-row items-center`}>
        <View
          style={tw`h-1.5 w-1.5 rounded-full mr-2 bg-[${
            inputTitle === 'Pickup' ? COLORS.SPANISH_VIRIDIAN : COLORS.LUST_RED
          }]`}
        />
        <TextInput
          value={inputText}
          onChangeText={onValueChange}
          style={tw`text-[${COLORS.BLACK}] text-3.75 flex-1`}
        />
      </View>
      {inputText && (
        <Pressable onPress={clearInput} style={tw`absolute right-1.5`}>
          <Image source={IMAGES.CLEAR_INPUT} />
        </Pressable>
      )}
    </View>
  );
}
