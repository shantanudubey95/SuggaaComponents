import React, { useReducer } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from 'twrnc';

import CouponCard from './CouponCard';
import SuggaButton from './SuggaButton';
import SuggaaText from './SuggaaText';
import SuggaaTextInput from './SuggaaTextInput';
import * as COLORS from './config/colors';

export default function CouponList() {
  const initialState = {
    couponCode: '',
  };

  function reducer(state: typeof initialState, action: { type: string; payload: any }) {
    const { type, payload } = action;
    return { ...state, [type]: payload };
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={tw`p-5 pb-0 flex-1 bg-[${COLORS.WHITE}]`}>
      <SuggaaTextInput
        style={{
          alignContent: 'center',
          width: '100%',
          borderWidth: 2,
          borderColor: COLORS.SPANIS_VIRIDIAN,
          borderRadius: 5,
          fontSize: 20,
          fontWeight: '400',
          paddingHorizontal: 13,
          paddingVertical: 10,
        }}
        value={state.couponCode}
        label="Enter Coupon Code"
        //   errorText={error}
        onChangeText={(text) => dispatch({ type: 'couponCode', payload: text })}
        selectionColor={COLORS.SPANIS_VIRIDIAN}
      />
      <View style={tw`my-3.75`}>
        <SuggaaText type="semibold" text="Available Coupons" style={tw`text-5.5`} />
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={tw`h-5.5`} />}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 4]}
        renderItem={() => (
          <CouponCard
            title="Suggaa"
            description="Get 30% OFF up to ₹25"
            validity="Valid of trips worth ₹100 or more."
            applyAction={() => alert('add here')}
          />
        )}
      />
      <View style={tw`my-5`}>
        <SuggaButton
          buttonType={state.couponCode ? 'FILLED' : 'DISABLED'}
          text="Apply Coupon Code"
          onPress={() => dispatch({ type: 'showModal', payload: true })}
        />
      </View>
    </View>
  );
}
