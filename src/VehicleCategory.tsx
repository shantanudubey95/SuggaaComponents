import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
type Option = 'Bike' | 'Auto' | 'Car';

interface props {
  vehicleType: Option;
}

const VehicleCategory = ({ vehicleType }: props) => {
  return (
    <View style={tw`h-20 w-20 items-center justify-center rounded-md shadow-md bg-white`}>
      <Image
        source={
          vehicleType === 'Auto'
            ? IMAGES.RICKSHAW
            : vehicleType === 'Bike'
            ? IMAGES.BIKE
            : IMAGES.SEDAN
        }
        style={tw`h-15 w-15`}
      />
      <Text style={tw`text-lg font-semibold `}>{vehicleType}</Text>
    </View>
  );
};

export default VehicleCategory;
