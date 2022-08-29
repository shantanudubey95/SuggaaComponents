import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
type props = {
  title: string;
  isActive: boolean;
  onPress: (title: string) => void;
};

export default function SuggaCheckBox({ title, isActive, onPress }: props) {
  return (
    <>
      <Pressable
        onPress={() => onPress(title)}
        style={tw`py-2.25 px-7.75 bg-[${
          isActive ? COLORS.SPANIS_VIRIDIAN : COLORS.WHITE
        }] border-2 items-center justify-center flex-row rounded-md border-[${
          !isActive ? COLORS.SILVER_FOIL : COLORS.SPANIS_VIRIDIAN
        }]`}>
        <Text
          style={tw`text-xl text-[${
            isActive ? COLORS.WHITE : COLORS.LIGHT_GRAY_BORDER
          }] font-normal`}>
          {title}
        </Text>
        <Image style={tw`absolute top-1.5 right-1.5`} source={require('../assets/Tick.png')} />
      </Pressable>
    </>
  );
}
