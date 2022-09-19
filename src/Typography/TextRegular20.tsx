import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps & {
  text: string;
};

export default function TextRegular20(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 20, fontFamily: 'Poppins_400Regular' }, props.style]}>
      {props.text}
    </Text>
  );
}
