import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

const COUNT_DOWN_FROM = 30;

const AnimatedText = () => {
  const count = useSharedValue(COUNT_DOWN_FROM);
  const formatted = useDerivedValue(() => `${Math.floor(count.value)}`.padStart(2, '0'));

  useEffect(() => {
    count.value = withTiming(
      0,
      { duration: COUNT_DOWN_FROM * 1000, easing: Easing.linear },
      () => {}
    );
  }, [count]);

  return (
    <ReText
      text={formatted}
      style={{ color: 'red', fontVariant: ['tabular-nums'], fontSize: 50 }}
    />
  );
};

export default AnimatedText;
