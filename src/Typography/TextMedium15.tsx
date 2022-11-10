import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps;

export default function TextMedium15(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 15, fontFamily: 'Poppins_500Medium' }, props.style]}>
      {props.children}
    </Text>
  );
}
