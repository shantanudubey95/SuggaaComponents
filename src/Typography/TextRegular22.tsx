import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps;

export default function TextRegular22(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 22, fontFamily: 'Poppins_400Regular' }, props.style]}>
      {props.children}
    </Text>
  );
}
