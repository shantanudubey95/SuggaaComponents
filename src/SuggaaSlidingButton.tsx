import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import tw from 'twrnc';

import * as IMAGES from './config/images';

interface Props {
  text: string;
  lightColor: string;
  darkColor: string;
  onToggle: boolean;
}
const width = Dimensions.get('window').width;
const H_SWIPE_RANGE = width - 48;

const SuggaaSlidingButton = ({ onToggle, lightColor, darkColor, text }: Props) => {
  const [toggled, setToggled] = React.useState(false);
  const X = useSharedValue(0);
  const handleComplete = (isToggled: boolean | ((prevState: boolean) => boolean)) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }
      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) X.value = newValue;
    },
    onEnd: () => {
      if (X.value < width / 1.5) {
        X.value = withSpring(0, { damping: 20 });
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE, { damping: 20 });
        runOnJS(setToggled)(true);
      }
    },
  });
  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(X.value, InterpolateXInput, [1, 0], Extrapolate.CLAMP),
      };
    }),
  };

  return (
    <View style={tw`h-12 bg-[${darkColor}] w-full rounded-md justify-center items-center`}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View
          style={[
            tw`z-3 h-12 w-12 border-2 bg-[${lightColor}] left-0 absolute rounded-md border-[${darkColor}] justify-center items-center`,
            AnimatedStyles.swipeable,
          ]}>
          <Image source={IMAGES.ARROW} />
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text style={[tw`z-2 text-white text-2xl font-medium`, AnimatedStyles.swipeText]}>
        {text}
      </Animated.Text>
    </View>
  );
};

export default SuggaaSlidingButton;
