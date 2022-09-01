import React, { useEffect } from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    interpolate,
} from 'react-native-reanimated';
import tw from 'twrnc'

const Ring = ({ size, color }: { size: number, color: string }) => {
    const ring = useSharedValue(0);

    const ringStyle = useAnimatedStyle(() => {
        return {
            opacity: 1 - ring.value,
            transform: [
                {
                    scale: interpolate(ring.value, [0, 1], [0, 4]),
                },
            ],
        };
    });
    useEffect(() => {
        ring.value = withRepeat(
            withTiming(1, {
                duration: 1500,
            }),
            -1,
            false
        );
    }, []);
    return (
        <Animated.View
            style={[tw`self-center w-[${size / 4}] h-[${size / 4}] border-[${size / 8}] rounded-[${size / 8}] border-[${color}]`,
                ringStyle,
            ]}
        />
    );
};

export default function RippleAnimation({ size, color }: { size: number, color: string }) {
    return <Ring size={size} color={color} />;
}