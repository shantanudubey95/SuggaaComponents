import React from 'react';
import { Image, Pressable } from 'react-native';
import type { PressableProps } from 'react-native';

type props = PressableProps & {
  ImageId: number;
};

export default function HamburgerIcon({ style, ImageId, onPress }: props) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Image source={ImageId} />
    </Pressable>
  );
}
