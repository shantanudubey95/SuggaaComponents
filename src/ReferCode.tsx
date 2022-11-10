import * as Clipboard from 'expo-clipboard';
import React, { useCallback } from 'react';
import { Image, Pressable, ToastAndroid } from 'react-native';
import tw from 'twrnc';

import SuggaaText from './SuggaaText';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type props = {
  code: string;
  background?: string;
};

export default function ReferCode({ code, background }: props) {
  const copyToClipboard = useCallback(async () => {
    await Clipboard.setStringAsync(code);
    ToastAndroid.show('Code Copied.', ToastAndroid.LONG);
  }, [code]);

  return (
    <Pressable
      onPress={() => copyToClipboard()}
      style={[
        tw`border-2 rounded-sm border-dashed border-[${
          COLORS.SPANISH_VIRIDIAN
        }] p-1.25  w-full items-center ${background ? `bg-[${background}]` : ``}`,
      ]}>
      <Pressable style={[tw`absolute right-1 top-1`]} onPress={() => copyToClipboard()}>
        <Image resizeMode="contain" source={IMAGES.COPY_ICON} />
      </Pressable>
      <SuggaaText
        type="bold"
        numberOfLines={1}
        style={[tw`text-6.25 uppercase text-[${COLORS.SPANISH_VIRIDIAN}]`]}
        text={code}
      />
    </Pressable>
  );
}
