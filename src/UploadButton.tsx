import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import tw from 'twrnc';

import * as IMAGES from './config/images';

interface props {
  title: string;
}

const UploadButton = ({ title }: props) => {
  return (
    <Pressable style={tw`w-25 h-25 flex-column justify-center items-center shadow-md bg-white`}>
      <Image source={IMAGES.UPLOAD} style={tw`h-15 w-15`} />
      <View style={{ width: '60%' }}>
        <Text style={tw`text-xs text-center`}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default UploadButton;
