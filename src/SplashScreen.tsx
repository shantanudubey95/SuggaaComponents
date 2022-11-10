import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from './Typography/TextRegular12';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

export default function Splash() {
  const ANIMATION = require('../assets/logoIntro');
  const [animationFinished, setAnimationFinished] = React.useState(false);

  return (
    <View style={tw`flex-1 p-9.5 items-center justify-center bg-[${COLORS.WHITE}]`}>
      <View style={tw`flex-1  items-center justify-end`}>
        {animationFinished ? (
          <Image source={IMAGES.SPLASH_SCREEN_LOGO} style={{ width: 145 }} resizeMode="contain" />
        ) : (
          <LottieView
            onAnimationFinish={() => setAnimationFinished(true)}
            autoPlay
            source={ANIMATION}
            loop={false}
            style={{ width: 300, alignSelf: 'center', position: 'absolute', bottom: -44 }}
          />
        )}
      </View>

      <View style={tw`flex-1 flex-row items-end justify-center`}>
        <View style={tw`flex-1 flex-row items-center justify-center`}>
          <TextRegular12>Made In</TextRegular12>
          <View style={tw`w-1`} />
          <Image source={IMAGES.INDIAN_FLAG} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
}
