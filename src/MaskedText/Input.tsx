import React, { createRef, useEffect, useState } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import tw from 'twrnc';

type Props = TextInputProps & {
  numberOfCharacters: number;
  handleInput: (inputText: string) => void;
  focus: string;
  setFocus: ({ type, payload }: { type: string; payload: string }) => void;
  color: string;
};

export default function (props: Props) {
  const [inputText, setInputText] = useState('');
  const [keyName, setKey] = useState('');
  const inputRef = createRef<TextInput>();

  function setBack() {
    setInputText(inputText.substring(0, inputText.length - 1));
    props.handleInput(inputText.substring(0, inputText.length - 1));
    if (inputText.substring(0, inputText.length - 1) === '') {
      shiftBackFocus();
    }
  }

  function shiftBackFocus() {
    if (props.focus === 'Y') props.setFocus({ type: 'focus', payload: 'M' });
    else if (props.focus === 'M') props.setFocus({ type: 'focus', payload: 'D' });
  }

  useEffect(() => {
    if (props.focus === props.placeholder) {
      inputRef.current?.focus();
    }
  }, [props.focus]);

  useEffect(() => {
    if (inputText.length === props.numberOfCharacters) {
      props.handleInput(inputText);
    }
  }, [inputText]);

  return (
    <View
      style={[
        tw`flex-row w-[${
          props.numberOfCharacters === 2 ? 8.5 : 11
        }] self-center items-center mx-0.25 justify-center`,
      ]}>
      <Text style={[tw`self-center font-bold  text-lg text-center tabular-nums ${props.color}`]}>
        {inputText.padEnd(props.numberOfCharacters, props.placeholder)}
      </Text>
      <TextInput
        ref={inputRef}
        {...props}
        style={[
          tw`opacity-0, absolute self-center font-bold text-green-600 text-lg text-center tabular-nums`,
        ]}
        maxLength={props.numberOfCharacters}
        onKeyPress={(e) => (
          e.nativeEvent.key === 'Backspace' && inputText === '' && shiftBackFocus(),
          setKey(e.nativeEvent.key)
        )}
        onChangeText={(text) => (keyName === 'Backspace' ? setBack() : setInputText(text))}
      />
    </View>
  );
}
