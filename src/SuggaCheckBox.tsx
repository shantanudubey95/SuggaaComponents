import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type props = {
  title: string;
  isActive: boolean;
  onPress: (title: string) => void;
};

export default function SuggaCheckBox({ title, isActive, onPress }: props) {
  return (
    <View style={tw`flex-row items-center mr-9.75`}>
      <Pressable
        onPress={() => onPress(title)}
        style={tw`mr-3.5 border border-[${
          COLORS.SPANIS_VIRIDIAN
        }] h-5 w-5 items-center justify-center rounded-1.25 bg-[${
          isActive ? COLORS.SPANIS_VIRIDIAN : COLORS.WHITE
        }]`}>
        {isActive && <Image source={IMAGES.CHECKBOX_TICK} />}
      </Pressable>
      <Text style={tw`text-3 text-[${COLORS.PHTHALO_GREEN}]`}>{title}</Text>
    </View>
  );
}
