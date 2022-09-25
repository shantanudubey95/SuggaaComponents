import React, { useEffect, useState } from 'react';
import { TextInput, LayoutChangeEvent, TextInputProps, View, Image, Pressable } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import tw from 'twrnc';

import TextSemiBold15 from './Typography/TextSemiBold15';
import TextSemiBold20 from './Typography/TextSemiBold20';
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
  const [dimension, setDimension] = useState<Dimension>({ x: 0, y: 0, width: 0, height: 0 });
  const [showModal, setShowModal] = useState(false);
  const [modalHeight, setModalHeight] = useState({ height: 0 });

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
    setDimension({ ...event.nativeEvent.layout });
  };
  const color = value ? COLORS.SPANISH_VIRIDIAN : COLORS.LIGHT_GRAY_BORDER;
  const text_Color = value ? COLORS.SPANISH_VIRIDIAN : COLORS.LIGHT_GRAY_BORDER;

  return (
    <Pressable
      onPress={() => setShowModal(true)}
      onLayout={onLayout}
      style={tw`h-[${showModal ? modalHeight.height / 4 : '13'}] flex-row`}>
      <TextInput
        {...props}
        editable={false}
        style={[
          style,
          {
            fontFamily: 'Poppins_400Regular',
            fontSize: 20,
            color: COLORS.BLACK,
            textAlignVertical: 'center',
          },
        ]}
        {...restOfProps}
        placeholder={label}
      />
      <Animated.View
        style={[tw`flex-row items-center px-1.5  absolute bg-[${COLORS.WHITE}]`, inputStyle]}>
        <TextSemiBold20 onPress={() => setShowModal(true)} style={tw`text-[${text_Color}] text-5`}>
          {label}
        </TextSemiBold20>
      </Animated.View>
      <Pressable onPress={() => setShowModal(true)} style={tw` mx-2 right-10 self-center`}>
        <Image source={IMAGES.DROPDOWN_ARROW} />
      </Pressable>
      {showModal && (
        <View
          onLayout={(event) => setModalHeight(event.nativeEvent.layout)}
          style={tw`absolute bg-[${COLORS.WHITE}] w-full rounded-1.25 `}>
          <View
            style={tw`bg-[${COLORS.WHITE}] rounded-1.25 border-2 border-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            <Pressable style={tw` px-4 py-2 bg-[${COLORS.SPANISH_VIRIDIAN}] rounded-1.25`}>
              <TextSemiBold20 onPress={() => setShowModal(true)} style={tw`text-[${COLORS.WHITE}]`}>
                {label}
              </TextSemiBold20>
            </Pressable>
            {list.map((item, index) => {
              return (
                <Pressable
                  style={tw`px-4 py-1.25 `}
                  key={index}
                  onPress={() => {
                    setShowModal(false);
                    props.onChangeText?.(item);
                  }}>
                  <TextSemiBold15 style={tw`text-[${COLORS.BLACK}]`}>{item}</TextSemiBold15>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}
    </Pressable>
  );
}
