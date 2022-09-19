import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps;

export default function TextBold12(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 12, fontFamily: 'Poppins_700Bold' }, props.style]}>
      {props.children}
    </Text>
  );
}
