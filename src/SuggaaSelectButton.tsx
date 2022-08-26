import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import tw from 'twrnc';

type props = {
  title: string;
  isActive: boolean;
  onPress: (title: string) => void;
};

export default function SuggaCheckBox({ title, isActive, onPress }: props) {
  return (
    <>
      <Pressable
        onPress={() => onPress(title)}
        style={tw`py-2.25 px-7.75 bg-[${
          isActive ? '#04825C' : '#fff'
        }] border-2 items-center justify-center flex-row rounded-md border-[${
          !isActive ? '#AAB4B1' : '#04825C'
        }]`}>
        <Text style={tw`text-xl text-[${isActive ? '#fff' : '#D3D6D5'}] font-normal`}>{title}</Text>
        <Image style={tw`absolute top-1.5 right-1.5`} source={require('../assets/Tick.png')} />
      </Pressable>
    </>
  );
}
