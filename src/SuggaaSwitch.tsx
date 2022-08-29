import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import tw from 'twrnc';

import * as COLORS from './config/colors';

const SuggaaSwitch = () => {
  const switchTranslate = useSharedValue(0);
  const [active, setActive] = React.useState(false);

  const progress = useDerivedValue(() => {
    return withTiming(active ? 44 : 0);
  });

  React.useEffect(() => {
    if (active) {
      switchTranslate.value = 44;
    } else {
      switchTranslate.value = 0;
    }
  }, [active, switchTranslate]);

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 44],
      [COLORS.LIGHT_GRAY_BORDER, COLORS.SPANIS_VIRIDIAN]
    );
    const borderColor = interpolateColor(
      progress.value,
      [0, 44],
      [COLORS.LIGHT_GRAY_BORDER, COLORS.SPANIS_VIRIDIAN]
    );
    return {
      backgroundColor,
      borderColor,
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  return (
    <Pressable
      onPress={() => {
        setActive(!active);
      }}>
      <Animated.View
        style={[
          tw`h-7 w-17.5 bg-[${COLORS.LIGHT_GRAY_BORDER}] justify-center rounded-full border-2 border-[${COLORS.LIGHT_GRAY_BORDER}]`,
          backgroundColorStyle,
        ]}>
        <Animated.View
          style={[tw`h-5.5 w-5.5 bg-white rounded-full shadow-lg shadow-black`, customSpringStyles]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default SuggaaSwitch;
