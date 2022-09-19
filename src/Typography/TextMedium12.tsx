import React from 'react';
import { Text, TextProps } from 'react-native';
type Props = TextProps & {
  text: string;
};

export default function TextMedium12(props: Props) {
  return (
    <Text {...props} style={[{ fontSize: 12, fontFamily: 'Poppins_500Medium' }, props.style]}>
      {props.text}
    </Text>
  );
}
