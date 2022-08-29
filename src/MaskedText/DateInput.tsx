import React, { useEffect, useReducer } from 'react';
import { View, Text } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import tw from 'twrnc';

import Input from './Input';

type props = {
  viewStyle: ViewStyle;
  textStyle: TextStyle;
  color: string;
  onValue: (date: string) => void;
};

export default function DateInput({ viewStyle, textStyle, color, onValue }: props) {
  const initialState = {
    day: '',
    month: '',
    year: '',
    focus: 'D',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: typeof initialState, action: { type: string; payload: string }) {
    const { type, payload } = action;
    return { ...state, [type]: payload };
  }

  useEffect(() => {
    if (state.day.length === 2) dispatch({ type: 'focus', payload: 'M' });
  }, [state.day]);

  useEffect(() => {
    if (state.month.length === 2) dispatch({ type: 'focus', payload: 'Y' });
  }, [state.month]);

  useEffect(() => {
    if (state.day.length === 2 && state.month.length === 2 && state.year.length === 4) {
      onValue(state.day + '-' + state.month + '-' + state.year);
    }
  }, [state.day, state.month, state.year]);

  return (
    <View style={viewStyle}>
      {['day', 'month', 'year'].map((item, index) => {
        return (
          <View key={index} style={tw`flex-row`}>
            <Input
              focus={state.focus}
              setFocus={dispatch}
              handleInput={(inputText: string) => dispatch({ type: item, payload: inputText })}
              numberOfCharacters={item === 'year' ? 4 : 2}
              numberOfLines={1}
              keyboardType="number-pad"
              style={textStyle}
              placeholder={item.charAt(0).toUpperCase()}
              color={color}
            />
            {index !== 2 && <Text style={[tw`font-bold ${color} text-center  text-lg`]}>/</Text>}
          </View>
        );
      })}
    </View>
  );
}
