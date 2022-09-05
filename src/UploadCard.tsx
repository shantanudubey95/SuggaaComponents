import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import tw from 'twrnc'

type props = {
    message: string
}

export default function UploadCard({ message }: props) {


    return (
        <Pressable style={tw`bg-[${COLORS.WHITE}] rounded-1.25 items-center py-0.75 shadow-md self-start max-w-25`}>
            <Image resizeMode='contain' source={IMAGES.UPLOADED_TICK} />
            <View style={tw`px-2.5 py-1.25`}>
                <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3.75 text-left`}>{message}</Text>
            </View>
            <View style={tw`flex-row`}>
                <Pressable onPress={() => { }} style={tw`ml-2.5`}>
                    <Image resizeMode='contain' source={IMAGES.EYE} />
                </Pressable>
                <Pressable onPress={() => { }} style={tw`ml-2.5`}>
                    <Image resizeMode='contain' source={IMAGES.DELETED} />
                </Pressable>
            </View>
        </Pressable>
    )
}
