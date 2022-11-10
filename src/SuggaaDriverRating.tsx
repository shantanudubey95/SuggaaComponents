import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

import * as IMAGES from './config/images';
type star = 1 | 2 | 3 | 4 | 5;
interface Props {
  steps: { rating: number; star: star }[];
}

const SuggaaDriverRating = ({ steps }: Props) => {
  const sum = steps.reduce((acc, value) => {
    return (acc += value.rating);
  }, 0);
  console.log((130 / sum) * 100);
  return steps.map((value, index) => (
    <View key={index} style={tw`w-full  flex-row h-5 mt-5`}>
      <View style={tw`w-9 items-center flex-row justify-start`}>
        <View style={tw`w-3`}>
          <Text style={tw`text-xs font-medium pr-1.5 items-center`}>{value.star}</Text>
        </View>
        <Image style={tw`h-3.75 w-3.75`} source={IMAGES.STAR_FILLED} />
      </View>
      <View style={tw`flex-1 bg-[#F1F5F4]`}>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: `${(value.rating / sum) * 100}%`,
            backgroundColor: '#04825C',
          }}
        />
      </View>
      <View style={tw`w-14 items-center flex-row justify-start pl-4`}>
        <Text style={tw`text-xs font-medium`}>{value.rating}</Text>
      </View>
    </View>
  ));
};

export default SuggaaDriverRating;
