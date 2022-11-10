import React, { useEffect } from 'react';
import { useDerivedValue, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

import * as COLORS from './config/colors';

const COUNT_DOWN_FROM = 30;
type Props = {
  size?: number;
};

const AnimatedText = ({ size }: Props) => {
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
      style={{
        color: COLORS.SPANISH_VIRIDIAN,
        fontFamily: 'Poppins_500Medium',
        fontVariant: ['tabular-nums'],
        fontSize: size || 50,
      }}
    />
  );
};

export default AnimatedText;
