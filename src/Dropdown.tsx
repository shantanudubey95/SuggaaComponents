import React from 'react';
import { View, Pressable, LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import tw from 'twrnc';

import TextRegular15 from './Typography/TextRegular15';
import TextSemiBold15 from './Typography/TextSemiBold15';
import TextSemiBold20 from './Typography/TextSemiBold20';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
import TextRegular20 from './Typography/TextRegular20';

type Props = {
  list: string[];
  label: string;
  onSelectValue: (value: string) => void;
};

type Dimension = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export default function Dropdown({ list, label, onSelectValue }: Props) {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [showDropdown, setshowDropdown] = React.useState(false);
  const [dimension, setDimension] = React.useState<Dimension>({ height: 0, width: 0, x: 0, y: 0 });
  const [textDimension, setTextDimension] = React.useState<Dimension>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const sharedVal = useSharedValue(0);

  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(interpolate(sharedVal.value, [0, 1], [1, 0.6]), {
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
        },
        {
          translateY: withTiming(interpolate(sharedVal.value, [0, 1], [-15, -dimension.height]), {
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
        },
        {
          translateX: withTiming(
            interpolate(sharedVal.value, [0, 1], [0, -textDimension?.width * 0.4]),
            {
              duration: 150,
              easing: Easing.bezier(0.4, 0, 0.2, 1),
            }
          ),
        },
      ],
    };
  }, [sharedVal.value]);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(showDropdown ? '180deg' : '0deg', {
            duration: 250,
            easing: Easing.linear,
          }),
        },
      ],
    };
  }, [showDropdown]);

  function selectValue(value: string) {
    sharedVal.value = 1;
    setSelectedValue(value);
    onSelectValue(value);
    setshowDropdown(false);
  }

  const onLayout = (event: LayoutChangeEvent) => {
    console.log('Mainview', event.nativeEvent.layout);
    setDimension({ ...event.nativeEvent.layout });
  };

  const onLayoutText = (event: LayoutChangeEvent) => {
    console.log('Textview', event.nativeEvent.layout);
    setTextDimension({ ...event.nativeEvent.layout });
  };

  return (
    <View onLayout={onLayout} style={tw`z-2`}>
      <Pressable
        onPress={() => setshowDropdown(!showDropdown)}
        style={tw`h-12 pl-4.25 py-2.25 bg-[${COLORS.WHITE}] border rounded-1.25 border-[${COLORS.SPANISH_VIRIDIAN}] border-[0.5] flex-row items-center`}>
        <View style={tw`flex-1 bg-[${COLORS.WHITE}`}>
          {selectedValue ? <TextRegular20>{selectedValue}</TextRegular20> : null}
          <Animated.View
            style={[
              tw`absolute bg-[${selectedValue ? COLORS.WHITE : 'transparent'}] px-[${
                selectedValue ? 5 : 0
              }]`,
              textStyle,
            ]}>
            <TextSemiBold20
              onLayout={onLayoutText}
              style={[tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`]}>
              {label}
            </TextSemiBold20>
          </Animated.View>
        </View>
        <Animated.Image style={imageStyle} source={IMAGES.DROPDOWN_ARROW} />
      </Pressable>
      {/* //////Dropdown////// */}
      {showDropdown ? (
        <View
          style={tw`absolute overflow-hidden bg-[${COLORS.WHITE}] border-1.25 border-[${COLORS.LIGHT_GRAY_BORDER}] w-full rounded-1.25 top-12.25`}>
          {list.map((item, index) => (
            <Pressable
              onPress={() => selectValue(item)}
              key={index}
              style={tw`pl-4.25 py-2.25 bg-[${
                selectedValue === item ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
              }]`}>
              <TextSemiBold15
                style={tw`text-[${selectedValue === item ? COLORS.WHITE : COLORS.BLACK}]`}>
                {item}
              </TextSemiBold15>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}
