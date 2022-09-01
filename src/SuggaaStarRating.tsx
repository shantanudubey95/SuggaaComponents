import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

export default function SuggaaStarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let path = require('../assets/star-filled.png');
    if (i > rating) {
      path = require('../assets/star-unfilled.png');
    }
    stars.push(<Image key={i} style={tw`h-8 w-8`} source={path} />);
  }
  return <View style={tw`justify-center items-center flex-row`}>{stars}</View>;
}
