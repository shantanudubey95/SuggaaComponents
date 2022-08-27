import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import Input from './Input';

type props = {
    viewStyle: any,
    textStyle: any,
    color: string
}

export default function DateInput({ viewStyle, textStyle, color }: props) {
    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [focus, setFocus] = useState('D');

    useEffect(() => {
        if (day.length === 2) setFocus('M');
    }, [day]);

    useEffect(() => {
        if (month.length === 2) setFocus('Y');
    }, [month]);

    return (
        <View style={viewStyle}>
            <Input
                focus={focus}
                setFocus={setFocus}
                handleInput={(val: string) => setDay(val)}
                numberOfCharacters={2}
                numberOfLines={1}
                keyboardType="number-pad"
                placeholderTextColor={color}
                selectionColor={color}
                style={textStyle}
                placeholder="D"
                color={color}
            />
            <Text style={[tw`font-bold ${color} mx-0.5 text-center  text-lg`]}>/</Text>
            <Input
                focus={focus}
                setFocus={setFocus}
                handleInput={(val: string) => setMonth(val)}
                numberOfCharacters={2}
                numberOfLines={1}
                keyboardType="number-pad"
                style={textStyle}
                placeholder="M"
                color={color}
            />
            <Text style={[tw`font-bold  ${color} mx-0.5 text-center  text-lg`]}>/</Text>
            <Input
                focus={focus}
                setFocus={setFocus}
                handleInput={(val: string) => setYear(val)}
                numberOfCharacters={4}
                numberOfLines={1}
                keyboardType="number-pad"
                style={textStyle}
                placeholder="Y"
                color={color}
            />
        </View>
    );
}