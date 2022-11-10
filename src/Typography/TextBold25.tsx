import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps;

export default function TextBold25(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 25, fontFamily: 'Poppins_700Bold' }, props.style]}>
      {props.children}
    </Text>
  );
}
