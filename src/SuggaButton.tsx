import React from 'react';
import { Pressable } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import TextMedium20 from './Typography/TextMedium20';

type props = PressableProps & {
  text: string;
  buttonType: 'FILLED' | 'BORDER' | 'DISABLED';
  onPress: () => void;
};

export default function SuggaaButton({ onPress, text, buttonType }: props) {
  return (
    <Pressable
      style={tw`${
        buttonType === 'FILLED'
          ? `bg-[${COLORS.SPANISH_VIRIDIAN}]`
          : buttonType === 'BORDER'
          ? `border-2 border-[${COLORS.SPANISH_VIRIDIAN}]`
          : buttonType === 'DISABLED'
          ? `bg-[${COLORS.LIGHT_GRAY_BORDER}]`
          : ''
      }  rounded-1.25 px-2.25 justify-center items-center h-12  self-stretch`}
      onPress={() => buttonType !== 'DISABLED' && onPress()}>
      <TextMedium20
        numberOfLines={1}
        style={tw`${
          buttonType === 'BORDER' ? `text-[${COLORS.SPANISH_VIRIDIAN}]` : `text-[${COLORS.WHITE}]`
        }`}>
        {text}
      </TextMedium20>
    </Pressable>
  );
}
