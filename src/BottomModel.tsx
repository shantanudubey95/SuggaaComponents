import React from 'react'
import { View, Text, Image, Pressable, Modal, LayoutChangeEvent, ViewProps } from 'react-native'
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import tw from 'twrnc'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'

type props = ViewProps & {
    showModal: boolean,
    onClose: () => void,
    height: string
}
export default function BottomModal({ onClose, children, height, showModal }: props) {


    const sharedValue = useSharedValue('0%')

    function onLayout(layout: LayoutChangeEvent) {
        sharedValue.value = height
    }

    const viewStyle = useAnimatedStyle(() => {
        return ({
            maxHeight: withTiming(sharedValue.value, { duration: 1000, easing: Easing.linear })
        })
    })

    return (
        <Modal visible={showModal} transparent style={tw`h-full`} statusBarTranslucent>
            <Pressable style={tw`flex-1 bg-[${COLORS.BLACK}] opacity-50`} onPress={onClose} />
            <Animated.View onLayout={onLayout} style={[viewStyle, tw`bg-[${COLORS.WHITE}] rounded-tl-1.25 rounded-tr-1.25`]}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`p-5`}>
                    {children}
                </ScrollView>
            </Animated.View>
        </Modal>
    )
}
