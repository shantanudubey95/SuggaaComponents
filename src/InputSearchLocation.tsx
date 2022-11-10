import React from 'react';
import { Image, TextInput, Pressable } from 'react-native';

type props = {
  isEditable: boolean;
  placeholder: string;
  onPress: () => void;
  onValue: (val: string) => void;
  style: any;
  textStyle: any;
  imageId: number;
};

export default function SearchLocation({
  placeholder,
  onPress,
  onValue,
  style,
  textStyle,
  isEditable,
  imageId,
}: props) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Image source={imageId} />
      <TextInput
        editable={isEditable}
        style={textStyle}
        placeholder={placeholder}
        onChangeText={onValue}
      />
    </Pressable>
  );
}
