import React from 'react';
import {
  TextInput,
  LayoutChangeEvent,
  TextInputProps,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';

import * as COLORS from './config/colors';

type Dimension = {
  width: number;
  height: number;
  x: number;
  y: number;
};

type Props = TextInputProps & {
  label: string;
  errorText?: string | null;
};

export default function SuggaaTextInput(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, errorText, value, style, onBlur, onFocus, ...restOfProps } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<TextInput>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimension, setdimension] = React.useState<Dimension>({ x: 0, y: 0, width: 0, height: 0 });

  const sharedVal = useSharedValue(0);

  const inputStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(interpolate(sharedVal.value, [0, 1], [1, 0.6]), {
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
        },
        {
          translateY: withTiming(interpolate(sharedVal.value, [0, 1], [10, -22]), {
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
        },
        {
          translateX: withTiming(interpolate(sharedVal.value, [0, 1], [12, 0]), {
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
        },
      ],
    };
  }, [sharedVal.value]);

  const onLayout = (event: LayoutChangeEvent) => {
    setdimension(event.nativeEvent.layout);
  };
  const color = errorText
    ? COLORS.LUST_RED
    : isFocused || value
    ? COLORS.SPANISH_VIRIDIAN
    : COLORS.LIGHT_GRAY_BORDER;
  const text_Color = isFocused || value ? COLORS.SPANISH_VIRIDIAN : COLORS.LIGHT_GRAY_BORDER;
  const error_Text_Color = COLORS.LUST_RED;

  return (
    <View onLayout={onLayout}>
      <TextInput
        {...props}
        ref={inputRef}
        value={value}
        style={[
          style,
          {
            borderColor: color,
          },
        ]}
        {...restOfProps}
        onBlur={(event) => {
          setIsFocused(false);
          sharedVal.value = value ? 1 : 0;
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          sharedVal.value = 1;
          onFocus?.(event);
        }}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View style={[styles.labelContainer, inputStyle]}>
          {errorText ? (
            <Text
              style={[
                styles.label,
                {
                  color: error_Text_Color,
                },
              ]}>
              {label}
              {errorText ? '' : ''}
            </Text>
          ) : (
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
                color: text_Color,
              }}>
              {props.label}
            </Text>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: COLORS.LUST_RED,
  },
});
