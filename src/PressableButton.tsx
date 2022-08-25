import React from 'react';
import { Image, GestureResponderEvent, Pressable } from 'react-native';
import tw from 'twrnc';

type Props = {
  icon: string;
  onPress: (event: GestureResponderEvent) => void;
};

const RideDetails = (props: Props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={tw`h-12 w-12 items-center justify-center bg-white rounded-md shadow-md`}>
      <Image source={props.icon} />
    </Pressable>
  );
};

export default RideDetails;
