import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  LayoutChangeEvent,
  TextInputProps,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Pressable,
} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

type Dimension = {
  width: number;
  height: number;
  x: number;
  y: number;
};

type Props = TextInputProps & {
  list: string[];
  label: string;
};

export default function SuggaaDropDown(props: Props) {
  const { label, value, style, onBlur, onFocus, list, ...restOfProps } = props;
  const [, setdimension] = useState<Dimension>({ x: 0, y: 0, width: 0, height: 0 });
  const [showModal, setShowModal] = useState(false);

  const sharedVal = useSharedValue(0);
  useEffect(() => {
    sharedVal.value = showModal ? 0 : value ? 1 : 0;
  }, [sharedVal, value, showModal]);

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
  const color = value ? '#04825C' : '#D3D6D5';
  const text_Color = value ? '#04825C' : '#D3D6D5';

  return (
    <Pressable onPress={() => setShowModal(true)} onLayout={onLayout} style={tw`flex-row`}>
      <TextInput
        {...props}
        editable={false}
        value={value}
        style={[style, { borderColor: color }]}
        {...restOfProps}
      />
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <Animated.View
          style={[tw`flex-row items-center px-1.5  absolute bg-[${COLORS.WHITE}]`, inputStyle]}>
          <Text style={tw`text-[${text_Color}] text-5`}>{props.label} </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Pressable onPress={() => setShowModal(true)} style={tw` mx-2 right-10 top-6`}>
        <Image source={IMAGES.DROPDOWN_ARROW} />
      </Pressable>
      {showModal && (
        <View style={tw`absolute bg-black w-full rounded-1.25`}>
          <View style={tw`bg-[${COLORS.WHITE}] rounded-1.25`}>
            <Pressable style={tw` px-4 py-2 bg-[${COLORS.SPANIS_VIRIDIAN}] rounded-1.25`}>
              <Text style={tw`text-[${COLORS.WHITE}] text-5`}>GENDER</Text>
            </Pressable>
            {list.map((item, index) => {
              return (
                <Pressable
                  style={tw`px-4 py-1`}
                  key={index}
                  onPress={() => {
                    setShowModal(false);
                    props.onChangeText?.(item);
                  }}>
                  <Text style={tw`text-[${COLORS.BLACK}]`}>{item}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}
    </Pressable>
  );
}
