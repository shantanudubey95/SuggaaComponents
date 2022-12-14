import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { View, Text, Image, Pressable, ToastAndroid } from 'react-native';
import tw from 'twrnc';

type props = {
  code: string;
};

export default function ReferCode({ code }: props) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    ToastAndroid.show('Code Copied.', ToastAndroid.LONG);
  };

  return (
    <View
      style={[tw`border-2 rounded-sm border-dashed border-emerald-700 p-2  w-full items-center`]}>
      <Pressable style={[tw`absolute right-1 top-1`]} onPress={() => copyToClipboard()}>
        <Image resizeMode="contain" source={require('../assets/copy.png')} />
      </Pressable>
      <Text numberOfLines={1} style={[tw`text-6.25 font-bold text-emerald-700 uppercase`]}>
        {code}
      </Text>
    </View>
  );
}
