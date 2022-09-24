import React from 'react';
import { View, Image, Pressable } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import SuggaaSwitch from './SuggaaSwitch';
import TextSemiBold18 from './Typography/TextSemiBold18';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type props = PressableProps & {
  onPress: () => void;
  title: string;
  withToggle?: boolean;
  isDisabled?: boolean;
  badgeCount?: number;
};

export default function SettingsButton({
  title,
  onPress,
  withToggle,
  isDisabled,
  badgeCount,
}: props) {
  const COLOR = isDisabled
    ? COLORS.LIGHT_GRAY_BORDER
    : badgeCount
    ? COLORS.SPANISH_VIRIDIAN
    : COLORS.BLACK;

  const PADDING_RIGHT = isDisabled || badgeCount ? 2.5 : 4.5;
  return (
    <Pressable
      style={tw`h-12.5 w-full shadow-md rounded-1.25 items-center flex-row pl-4.5 py-3 pr-${PADDING_RIGHT} bg-[${COLORS.WHITE}]`}
      onPress={onPress}>
      <TextSemiBold18 style={tw`text-[${COLOR}]`}>{title}</TextSemiBold18>
      <View style={tw`flex-1`} />
      {withToggle ? (
        <SuggaaSwitch onPress={onPress} />
      ) : isDisabled ? (
        <Image source={IMAGES.ERROR_ICON} resizeMode="contain" />
      ) : badgeCount ? (
        <View style={tw`items-center justify-center`}>
          <Image source={IMAGES.BADGE_VIEW} resizeMode="contain" />
          <TextSemiBold18 style={tw`absolute text-[${COLORS.SPANISH_VIRIDIAN}]`}>
            {badgeCount}
          </TextSemiBold18>
        </View>
      ) : (
        <Image source={IMAGES.ARROW_RIGHT_GREEN} resizeMode="contain" />
      )}
    </Pressable>
  );
}
