import { getStringAsync } from 'expo-clipboard';
import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import tw from 'twrnc';

import * as COLORS from './config/colors';
interface Props {
  numberOfInputs?: number;
  setDate: (date: string) => void;
}

export default function DateInput({ numberOfInputs = 8, setDate }: Props) {
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const textInputRefs = Array.from({ length: numberOfInputs }).map(() =>
    React.createRef<TextInput>()
  );
  const [dateText, setDateText] = useState<string[]>(
    Array.from({ length: numberOfInputs }).map(() => '')
  );

  useEffect(() => {
    if (dateText && dateText.join('').length === numberOfInputs) setDate(dateText.join(''));
    else setDate('');
  }, [dateText]);

  const onKeyPress = useCallback(
    (index: number | undefined) =>
      ({ nativeEvent: { key: keyValue } }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (
          Array.from({ length: 10 })
            .map((_, index) => index.toString())
            .includes(keyValue)
        ) {
          setDateText((value) => [...value.slice(0, index), keyValue, ...value.slice(index + 1)]);
          setDirection('forward');
        } else if (keyValue === 'Backspace') {
          setDateText((value) => [
            ...value.slice(0, index),
            ...Array.from({ length: numberOfInputs - index }).map(() => ''),
          ]);
          setDirection('back');
        }
      },
    [numberOfInputs]
  );
  function getPlaceholder(index: number) {
    if (index < 2) return 'D';
    else if (index < 4) return 'M';
    else if (index < 8) return 'Y';
  }
  useEffect(() => {
    let activeIndex = -1;
    for (let index = 0; index < dateText.length; index++) {
      const value = dateText[index];
      if (value !== '') {
        activeIndex = index;
      } else {
        break;
      }
    }
    if (direction === 'back' && activeIndex >= 0 && activeIndex <= numberOfInputs - 1) {
      textInputRefs[activeIndex].current?.focus();
    } else if (activeIndex + 1 >= 0 && activeIndex + 1 <= numberOfInputs - 1) {
      textInputRefs[activeIndex + 1].current?.focus();
    }
  }, [direction, numberOfInputs, dateText, textInputRefs]);

  const onChangeText = useCallback(
    (index: number) => (text: string) => {
      getStringAsync().then((textInClipboard: string) => {
        if (
          textInClipboard.length === numberOfInputs &&
          /[0-9]{4}/g.test(textInClipboard) &&
          text === textInClipboard &&
          index === 0
        ) {
          setDateText(textInClipboard.split(''));
        }
      });
    },
    [numberOfInputs]
  );

  return (
    <View
      style={tw`w-59.5 flex-row justify-start h-12 pl-4.25 rounded-md items-center border-2 border-[${COLORS.SPANISH_VIRIDIAN}]`}>
      {textInputRefs.map((value, index) => (
        <>
          <TextInput
            key={`textinput-${index}`}
            style={[
              tw` w-4 text-5 h-full text-center justify-center	`,
              { fontFamily: 'Poppins_400Regular' },
            ]}
            keyboardType="numeric"
            textAlign="center"
            selectionColor={COLORS.SPANISH_VIRIDIAN}
            ref={value}
            autoFocus={index === 0}
            onKeyPress={onKeyPress(index)}
            onChangeText={onChangeText(index)}
            returnKeyType={index === numberOfInputs - 1 ? 'done' : 'next'}
            value={dateText[index].toString()}
            placeholder={getPlaceholder(index)}
          />
          {[1, 3].includes(index) && (
            <TextInput
              key={`${index}`}
              style={[
                tw` w-4 text-5 h-full text-center justify-center	`,
                { fontFamily: 'Poppins_400Regular' },
              ]}
              editable={false}
              placeholder={'/'}
            />
          )}
        </>
      ))}
    </View>
  );
}
