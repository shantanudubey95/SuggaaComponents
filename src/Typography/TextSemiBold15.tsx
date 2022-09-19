import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps & {
  text: string;
};

export default function TextSemiBold15(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 15, fontFamily: 'Poppins_600SemiBold' }, props.style]}>
      {props.text}
    </Text>
  );
}
