import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import SuggaaSwitch from './SuggaaSwitch';

const OnOffDutySwitch = () => {
  return (
    <View style={tw`p-2.5 rounded-md flex-row bg-white rounded-md shadow-md`}>
      <Text style={tw`font-semibold text-lg mr-2.5`}>Off Duty</Text>
      <SuggaaSwitch />
      <Text style={tw`font-semibold text-lg ml-2.5`}>On Duty</Text>
    </View>
  );
};

export default OnOffDutySwitch;
