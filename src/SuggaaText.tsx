import React from 'react';
import { Text, TextProps } from 'react-native';

type Props = TextProps & {
  type: 'bold' | 'semibold' | 'medium' | 'regular';
  text: string;
};

export default function SuggaaText(props: Props) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily:
            props.type === 'bold'
              ? 'Poppins_700Bold'
              : props.type === 'semibold'
              ? 'Poppins_600SemiBold'
              : props.type === 'medium'
              ? 'Poppins_500Medium'
              : props.type === 'regular'
              ? 'Poppins_400Regular'
              : '',
        },
        props.style,
      ]}>
      {props.text}
    </Text>
  );
}
