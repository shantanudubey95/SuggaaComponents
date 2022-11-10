import React, { useReducer, useRef } from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc';
import SuggaButton from './SuggaButton';
import SuggaaText from './SuggaaText';
import * as COLORS from './config/colors';
import LottieView from 'lottie-react-native';
import Lottie from './Lottie';

export default function LottiesList() {
    const initialState = {
    };

    function reducer(state: typeof initialState, action: { type: string; payload: any }) {
        const { type, payload } = action;
        return { ...state, [type]: payload };
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ScrollView contentContainerStyle={tw`p-5 pb-0 bg-[${COLORS.WHITE}] items-center`}>
            <Lottie source={require('../assets/MiniCarsearching.json')} style={{ width: 200, height: 200 }} />
            <Lottie source={require('../assets/Autosearching.json')} style={{ width: 200, height: 200 }} />
            <Lottie source={require('../assets/Carsearching.json')} style={{ width: 200, height: 200 }} />
            <Lottie source={require('../assets/Bicksearching.json')} style={{ width: 200, height: 200 }} />
            <Lottie source={require('../assets/logoIntro.json')} style={{ width: 500, height: 500 }} />
            <Lottie source={require('../assets/tick.json')} loop={false} style={{ width: 200, height: 200 }} />
            <Lottie source={require('../assets/illution.json')} style={{ width: 200, height: 200 }} />
            <Lottie source={require('../assets/Like.json')} loop={false} style={{ width: 200, height: 200 }} />
        </ScrollView>
    );
}
