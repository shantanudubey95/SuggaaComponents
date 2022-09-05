import React from 'react'
import { View, Text, Image, Pressable, Modal, LayoutChangeEvent, ViewProps } from 'react-native'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import tw from 'twrnc'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

type props = ViewProps & {
    onClose: () => void,
    height: number
}
export default function BottomModal({ onClose, children, height }: props) {


    const sharedValue = useSharedValue(0)

    function onLayout(layout: LayoutChangeEvent) {
        sharedValue.value = height
    }

    const viewStyle = useAnimatedStyle(() => {
        return ({
            height: withTiming(sharedValue.value, { duration: 300, easing: Easing.linear })
        })
    })

    return (
        <Modal visible={true} transparent style={tw`h-full`}>
            <Pressable style={tw`flex-1 bg-[${COLORS.BLACK}] opacity-50`} onPress={onClose} />
            <Animated.View onLayout={onLayout} style={[viewStyle, tw`rounded-tl-1.25 rounded-tr-1.25`]}>
                {children}
            </Animated.View>
        </Modal>
    )
}
