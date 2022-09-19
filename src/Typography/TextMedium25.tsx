import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps;

export default function TextMedium25(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 25, fontFamily: 'Poppins_500Medium' }, props.style]}>
      {props.children}
    </Text>
  );
}
