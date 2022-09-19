import React from 'react';
import { Dimensions, View, Text, Image } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import tw from 'twrnc';

import Star from './Star';
import SuggaaImageButton from './SuggaaImageButton';
import TextRegular15 from './Typography/TextRegular15';
import TextSemiBold12 from './Typography/TextSemiBold12';
import TextSemiBold15 from './Typography/TextSemiBold15';
import TextSemiBold18 from './Typography/TextSemiBold18';
import TextSemiBold22 from './Typography/TextSemiBold22';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const PaymentSheet = ({ navigation }: { navigation: any }) => {
  const translateY = useSharedValue(0);
  const scrollTo = React.useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  React.useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 2.25);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  const [rating, setRating] = React.useState(0);
  const payCards = (name: string, value?: string, bolder?: boolean, color?: string) => {
    return (
      <View style={tw`flex-row items-center mt-3.75`}>
        <View style={tw`flex-1`}>
          {bolder ? (
            <TextSemiBold15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>
              {name}
            </TextSemiBold15>
          ) : (
            <TextRegular15 style={tw`text-[${color ? color : COLORS.BLACK}] `}>
              {name}
            </TextRegular15>
          )}
          {/* <TextSemiBold15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>{name}</TextSemiBold15> */}
        </View>
        <TextRegular15 style={tw`text-[${color ? color : COLORS.BLACK}] `}>{value}</TextRegular15>
      </View>
    );
  };
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          tw`absolute w-full h-${SCREEN_HEIGHT} bg-white rounded-md shadow-lg`,
          { top: SCREEN_HEIGHT },
          BottomSheetStyle,
        ]}>
        <View
          style={tw`w-15 h-1.25 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-center my-2.25 rounded-md`}
        />
        <View style={tw`flex-1 mx-4.75 mt-4`}>
          <View style={tw`flex-row justify-between items-center my-2`}>
            <View style={tw``}>
              <View style={tw`flex-row`}>
                <TextSemiBold22 style={tw`text-[${COLORS.SPANIS_VIRIDIAN}]`}>Total</TextSemiBold22>
                <TextSemiBold22> ₹37.0</TextSemiBold22>
              </View>
              <View style={tw`flex-row`}>
                <TextSemiBold12>Paid via</TextSemiBold12>
                <TextSemiBold12 style={tw`text-[${COLORS.SPANIS_VIRIDIAN}]`}> Gpay</TextSemiBold12>
              </View>
            </View>
            <View>
              <SuggaaImageButton text="Ride Details" buttonType="BORDER" imageId={IMAGES.ABOUT} />
            </View>
          </View>
          <TextSemiBold18>Tue, Aug 02, 12:15 AM</TextSemiBold18>
          <View style={[tw`mt-2.5`, { borderWidth: 0.5, borderColor: '#00000040' }]} />
          <View style={tw`w-full mt-6 justify-start items-center`}>
            <Image
              source={require('../assets/profileDummy.png')}
              style={{ height: 50, width: 50 }}
            />
            <TextRegular15 style={tw`mt-2.5 mb-4`}>
              How was your ride with Jon Romero?
            </TextRegular15>
            <Star rating={rating} setRating={setRating} />
          </View>
          <View style={tw`mt-7.5`}>
            <View style={tw`flex-row items-center`}>
              <View style={tw`w-4 h-4 bg-[${COLORS.SPANIS_VIRIDIAN}] rounded-full mr-2.5`} />
              <TextRegular15>Birsa Munda Airport, Ranchi, Hurlung, ...</TextRegular15>
            </View>
            <View style={tw`h-4.5 w-0.25 ml-1.75 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-start`} />

            <View style={tw`flex-row items-center`}>
              <View style={tw`w-4 h-4 bg-[${COLORS.LUST_RED}] rounded-full mr-2.5`} />
              <TextRegular15>Birsa Munda Airport, Ranchi, Hurlung, ...</TextRegular15>
            </View>
          </View>
          <View style={tw`mt-5`}>
            {payCards('Payment Mode', 'Cash', true, COLORS.SPANIS_VIRIDIAN)}
            {payCards('Bill Detail')}
            {payCards('Ride Fare', '₹ 94.5')}
            {payCards('Total Platform Charges', '₹ 94.5')}
            {payCards('Coupon Savings', '₹ 94.5')}
            {payCards('Taxes', '₹ 94.5')}
            {payCards('Total payable', '₹ 1234', true)}
          </View>
          <View style={tw`flex-row w-full shadow-md bg-white rounded-md mt-8.25`}>
            <View style={tw`flex-1 items-center justify-center py-5`}>
              <TextSemiBold18>2.34 KM</TextSemiBold18>
              <Text style={tw`font-normal text-base`}>Distance</Text>
            </View>
            <View style={tw`h-full w-.25 bg-[${COLORS.LIGHT_GRAY_BORDER}]`} />
            <View style={tw`flex-1 items-center justify-center py-5`}>
              <TextSemiBold18>5.14</TextSemiBold18>
              <TextRegular15>Duration</TextRegular15>
            </View>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default PaymentSheet;
