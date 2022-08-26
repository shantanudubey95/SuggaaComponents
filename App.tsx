import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import tw from 'twrnc';

import AnimatedText from './src/AnimatedText';
import DateInput from './src/MaskedText/DateInput';
import OTPInputs from './src/OTPInputs';
import OnOffDutySwitch from './src/OnOffDutySwitch';
import PressableButton from './src/PressableButton';
import ProgressAnimation from './src/ProgressAnimation';
import ReferCode from './src/ReferCode';
import SuggaaSelectButton from './src/SuggaaSelectButton';
import SuggaaTextInput from './src/SuggaaTextInput';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  });
  const SHARE = require('./assets/Share.png');
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  console.log(selectedCheckBox);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <OTPInputs numberOfInputs={4} />
        <AnimatedText />
        <ProgressAnimation
          activeColor="#04825C"
          trackColor="#04825C40"
          progress={100}
          steps={[
            { status: 'done', label: 'Personal Details' },
            { status: 'untouched', label: 'Bank Details' },
            { status: 'active', label: 'Vehicle Details' },
          ]}
        />

        <DateInput
          color="text-green-600"
          textStyle={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
          viewStyle={[tw`flex-row py-4 px-8 rounded-2 items-center border-2 border-green-600`]}
        />

        <ReferCode code="SUGGAREF25" />

        <View style={{ width: '100%', paddingHorizontal: 54 }}>
          <SuggaaTextInput
            style={{
              alignContent: 'center',
              width: '100%',
              borderWidth: 2,
              borderColor: '#04825C',
              borderRadius: 5,
              fontSize: 20,
              fontWeight: '400',
              paddingHorizontal: 13,
              paddingVertical: 10,
            }}
            value={value}
            label="Full name"
            errorText={error}
            onChangeText={(text) => setValue(text)}
            selectionColor="#04825C"
          />
        </View>
        <View style={{ height: 16 }} />
        <Button
          title={error ? 'Clear error' : 'Set Error'}
          onPress={() => (error ? setError('') : setError('This field is required.'))}
        />
        <PressableButton onPress={() => {}} icon={SHARE} />
        <OnOffDutySwitch />
        <SuggaaSelectButton
          title="Him"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Him'}
        />
        <SuggaaSelectButton
          title="Her"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Her'}
        />
        <SuggaaSelectButton
          title="I perfer not to say"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'I perfer not to say'}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
