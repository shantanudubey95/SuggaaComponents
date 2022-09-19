import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';
import tw from 'twrnc';

type props = AnimatedLottieViewProps
export default function Lottie(lottieViewProps: props) {

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current?.play()
    }, [])

    return (
        <Pressable style={tw`flex-row items-center`}>
            <LottieView
                {...lottieViewProps}
                ref={animationRef}
            />
            <View>
                <Text onPress={() => animationRef.current?.play()}>Play</Text>
                <Text onPress={() => animationRef.current?.pause()}>Pause</Text>
                <Text onPress={() => animationRef.current?.resume()}>Resume</Text>
                <Text onPress={() => animationRef.current?.reset()}>Reset</Text>
            </View>
        </Pressable>
    );
}
