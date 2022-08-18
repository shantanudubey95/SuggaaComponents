import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import Input from './Input';

export default function DateInput() {
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
        <View style={[tw`flex-row py-4 px-8 rounded-2 border-2 border-green-600 `]}>
            <Input
                focus={focus}
                setFocus={setFocus}
                handleInput={(val: string) => setDay(val)}
                numberOfCharacters={2}
                numberOfLines={1}
                keyboardType="number-pad"
                placeholderTextColor="darkseagreen"
                selectionColor="darkseagreen"
                style={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
                placeholder="D"
            />
            <Text style={[tw`font-bold  text-green-600 mx-0.5 text-center  text-lg`]}>/</Text>
            <Input
                focus={focus}
                setFocus={setFocus}
                handleInput={(val: string) => setMonth(val)}
                numberOfCharacters={2}
                numberOfLines={1}
                keyboardType="number-pad"
                placeholderTextColor="darkseagreen"
                selectionColor="darkseagreen"
                style={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
                placeholder="M"
            />
            <Text style={[tw`font-bold  text-green-600 mx-0.5 text-center  text-lg`]}>/</Text>
            <Input
                focus={focus}
                setFocus={setFocus}
                handleInput={(val: string) => setYear(val)}
                numberOfCharacters={4}
                numberOfLines={1}
                keyboardType="number-pad"
                placeholderTextColor="darkseagreen"
                selectionColor="darkseagreen"
                style={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
                placeholder="Y"
            />
        </View>
    );
}