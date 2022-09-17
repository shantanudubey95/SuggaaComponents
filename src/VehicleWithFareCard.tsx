import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import tw from 'twrnc'

type props = {
    vehicleType: 'SEDAN' | 'HATCH' | 'RICKSHAW' | 'SCOOTER' | 'BIKE',
    duration: string,
    fare: number,
    onPress: () => void
}

export default function VehicleWithFareCard({ vehicleType, duration, fare, onPress }: props) {

    function getVehicleType() {
        switch (vehicleType) {
            case 'SEDAN': return IMAGES.SEDAN
            case 'HATCH': return IMAGES.HATCH_BACK
            case 'RICKSHAW': return IMAGES.RICKSHAW
            case 'SCOOTER': return IMAGES.SCOOTER
            case 'BIKE': return IMAGES.BIKE
            default: return IMAGES.SEDAN
        }
    }

    return (
        <Pressable style={tw`bg-[${COLORS.WHITE}] rounded-1.25 flex-row items-center py-0`}>
            <Image resizeMode='contain' source={getVehicleType()} />
            <View style={tw`flex-row items-center flex-1 justify-start self-stretch`}>
                <View style={tw`ml-5`}>
                    <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3.75 text-[${COLORS.BLACK}] font-medium`}>{vehicleType}</Text>
                </View>
                <View style={tw`w-3`} />
                {/* <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3.37 text-[${COLORS.LIGHT_GRAY_BORDER}]`}>{duration} min</Text> */}
                <View style={tw`flex-1`} />
                <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3.75 text-[${COLORS.BLACK}] font-medium`}>₹{fare}</Text>
                <Pressable onPress={onPress} style={tw`ml-2.5`}>
                    <Image resizeMode='contain' source={IMAGES.INFO_GREY} />
                </Pressable>
            </View>
        </Pressable>
    )
}
