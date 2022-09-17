import React from 'react';
import { Pressable, Modal, LayoutChangeEvent, ViewProps } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import tw from 'twrnc';

import * as COLORS from './config/colors';

type props = ViewProps & {
  onClose: () => void;
  height: number;
};
export default function BottomModal({ onClose, children, height }: props) {
  const sharedValue = useSharedValue(0);

  function onLayout(layout: LayoutChangeEvent) {
    sharedValue.value = height;
  }

  const viewStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(sharedValue.value, { duration: 300, easing: Easing.linear }),
    };
  });

  return (
    <Modal visible transparent style={tw`h-full`} statusBarTranslucent>
      <Pressable style={tw`flex-1 bg-[${COLORS.BLACK}] opacity-50`} onPress={onClose} />
      <Animated.View
        onLayout={onLayout}
        style={[viewStyle, tw`bg-[${COLORS.WHITE}] rounded-tl-1.25 rounded-tr-1.25`]}>
        {children}
      </Animated.View>
    </Modal>
  );
}
