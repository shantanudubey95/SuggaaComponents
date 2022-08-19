import React, { createRef, useEffect, useState } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import tailwind from 'twrnc';

type Props = TextInputProps & {
    numberOfCharacters: number;
    handleInput(val: string): any;
    focus: string;
    setFocus(val: string): any;
    color: string
};

export default function (props: Props) {

    const [val, setVal] = useState<string>('');
    const [keyName, setKey] = useState<string>('');
    const inputRef = createRef<TextInput>();

    function setBack() {
        setVal(val.substring(0, val.length - 1));
        props.handleInput(val.substring(0, val.length - 1));
        if (val.substring(0, val.length - 1) === '') {
            shiftBackFocus();
        }
    }

    function shiftBackFocus() {
        if (props.focus === 'Y') props.setFocus('M');
        else if (props.focus === 'M') props.setFocus('D');
    }

    useEffect(() => {
        if (props.focus === props.placeholder) {
            inputRef.current?.focus();
        }
    }, [props.focus]);

    useEffect(() => {
        if (val.length === props.numberOfCharacters) {
            props.handleInput(val);
        }
    }, [val]);


    return (
        <View style={[tailwind`flex-row`]}>
            <Text style={[tailwind`self-center font-bold  text-lg text-center tabular-nums ${props.color}`]}>
                {val.padEnd(props.numberOfCharacters, props.placeholder)}
            </Text>
            <TextInput
                ref={inputRef}
                {...props}
                style={[tailwind`opacity-0, absolute self-center font-bold text-green-600 text-lg text-center tabular-nums`]}
                maxLength={props.numberOfCharacters}
                onKeyPress={(e) => (
                    e.nativeEvent.key === 'Backspace' && val === '' && shiftBackFocus(),
                    setKey(e.nativeEvent.key)
                )}
                onChangeText={(text) => (keyName === 'Backspace' ? setBack() : setVal(text))}
            />
        </View>
    );
}