import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps & {
  text: string;
};

export default function TextBold18(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 18, fontFamily: 'Poppins_700Bold' }, props.style]}>
      {props.text}
    </Text>
  );
}
