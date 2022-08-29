import React from 'react';
import { Dimensions, View, Text, Pressable } from 'react-native';
import { Gesture, GestureDetector, TextInput } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import tw from 'twrnc';

import DriverDetails from './DriverDetails';
import Payment from './PaymentMethod';
import PressableButton from './PressableButton';
import RideDetails from './RideDetails';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 45;
const BottomSheet = () => {
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
        <View style={tw`flex-1 mx-4.75`}>
          <Text style={tw`text-2xl font-semibold`}>Meet at the pickup point</Text>
          <View style={tw`flex-row justify-between items-center my-2`}>
            <Text style={tw`font-medium text-sm`}>7 min to pickup</Text>
            <Pressable style={tw`py-1.75 px-8.75 bg-[${COLORS.SPANIS_VIRIDIAN}] rounded-md`}>
              <Text style={[tw`font-medium text-sm`, { color: 'white' }]}>OTP:6520</Text>
            </Pressable>
          </View>
          <View style={[tw`my-2.5`, { borderWidth: 0.5, borderColor: '#00000040' }]} />
          <View style={tw`w-full h-22.75 mt-6.25`}>
            <DriverDetails
              driver_name="Raju Mokhtan"
              car_number="JH05BM544"
              car_name="Swift Dezire"
              rating={4.8}
              driver_image=""
            />
          </View>
          <View style={tw`flex-row justify-between items-center mt-5 w-full`}>
            <TextInput
              placeholder="Any pickup notes?"
              style={tw`h-12 w-56 bg-white rounded-md shadow-lg px-2.25`}
            />
            <PressableButton onPress={() => {}} icon={IMAGES.CALL} />
            <PressableButton onPress={() => {}} icon={IMAGES.SHARE} />
          </View>
          <View
            style={{
              borderWidth: 0.5,
              marginVertical: 10,
              borderColor: '#00000040',
              marginTop: 25,
            }}
          />
          <Pressable
            style={tw`w-full h-12 justify-center items-center border-2 border-[${COLORS.LUST_RED}] rounded-md my-5`}>
            <Text style={tw`font-medium text-2xl text-[${COLORS.LUST_RED}]`}>Cancel</Text>
          </Pressable>
          <Text style={tw`font-semibold text-2xl`}>Trip</Text>
          <RideDetails
            pickup_location="Birsa Munda Airport, Ranchi, Hurlung, ..."
            drop_location="Birsa Munda Airport, Ranchi, Hurlung, ..."
          />
          <Payment onPress={() => {}} price={121} />
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheet;
