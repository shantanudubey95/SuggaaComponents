import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';
type Props = {
  driver_name: string;
  car_number: string;
  car_name: string;
  rating: number;
  driver_image: string;
};

const DriverDetails = (props: Props) => {
  return (
    <>
      <View style={tw`justify-center items-end`}>
        <View style={tw`w-9/10 h-9.25 bg-[#04825C] flex-row-reverse rounded-md items-center`}>
          <Text style={tw`text-white text-xl font-semibold mr-1.75`}>{props.driver_name}</Text>
        </View>
        <View style={tw`w-7/10 items-end justify-between flex-row`}>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`font-normal text-base`}>{props.rating}</Text>
            <Image source={require('../assets/Star.png')} style={tw`h-8 w-8`} />
          </View>
          <View style={tw`items-end`}>
            <Text style={tw`text-xl font-semibold mr-1.75`}>{props.car_number}</Text>
            <Text style={tw`text-base font-semibold mr-1.75`}>{props.car_name}</Text>
          </View>
        </View>
      </View>
      <Image source={require('../assets/Pic26.png')} style={tw`absolute h-22.75 w-22.75`} />
    </>
  );
};

export default DriverDetails;
