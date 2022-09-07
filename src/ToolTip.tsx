import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import tw from 'twrnc'

type props = {
    address: string,
    onPress: () => void
}

export default function ToolTip({ address, onPress }: props) {
    return (
        <Pressable onPress={onPress} style={tw`bg-[${COLORS.WHITE}] shadow-md rounded-1.25 w-27.25`}>
            <View style={tw`flex-row`}>
                <View style={tw`p-1.25 pr-4 flex-1`}>
                    <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3`}>{address}</Text>
                </View>
                <Image resizeMode='contain' style={tw`absolute right-0`} source={IMAGES.ARROW_RIGHT_BLACK} />
            </View>
            <View style={tw`w-0 h-0 bg-transparent border-solid	 border-r-11.25	border-l-11.25 border-t-22.5 border-b-0	 border-l-transparent border-r-transparent  border-t-[${COLORS.WHITE}]  border-b-transparent absolute bottom--1.75 self-center`} />
        </Pressable>

    )
}
