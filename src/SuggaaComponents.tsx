// import {
//   useFonts,
//   Poppins_300Light,
//   Poppins_400Regular,
//   Poppins_400Regular_Italic,
//   Poppins_500Medium,
//   Poppins_700Bold,
//   Poppins_600SemiBold,
//   Poppins_900Black,
// } from '@expo-google-fonts/poppins';
// import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, View } from 'react-native';
import tw from 'twrnc';

import AnimatedText from './AnimatedText';
import DateInput from './MaskedText/DateInput';
import OTPInputs from './OTPInputs';
import OnOffDutySwitch from './OnOffDutySwitch';
import PressableButton from './PressableButton';
import ProfilePicture from './ProfilePicture';
import ProgressAnimation from './ProgressAnimation';
import ReferCode from './ReferCode';
import SelectRide from './SelectRide';
import Star from './Star';
import SuggaaSelectButton from './SuggaaSelectButton';
import SuggaaStarRating from './SuggaaStarRating';
import SuggaaTextInput from './SuggaaTextInput';
import * as COLORS from './config/colors';
import SuggaaSlidingButton from './SuggaaSlidingButton';
import ExpoSvg from './ExpoSvg';
import SuggaaDriverRating from './SuggaaDriverRating';

export default function App() {
  //   const [fontsLoaded] = useFonts({
  //     Poppins_300Light,
  //     Poppins_400Regular,
  //     Poppins_600SemiBold,
  //     Poppins_400Regular_Italic,
  //     Poppins_500Medium,
  //     Poppins_700Bold,
  //     Poppins_900Black,
  //   });
  const SHARE = require('../assets/Share.png');
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  const [, setDOB] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const [toggleState, setToggleState] = React.useState(false);
  const handleToggle = (value: boolean | ((prevState: boolean) => boolean)) =>
    setToggleState(value);
  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   } else {
  return (
    <ScrollView style={tw`w-full bg-white`} contentContainerStyle={tw`p-4 items-center`}>
      <OTPInputs numberOfInputs={4} />
      <AnimatedText />
      <ProgressAnimation
        activeColor={COLORS.SPANIS_VIRIDIAN}
        trackColor="#04825C40"
        progress={100}
        steps={[
          { status: 'done', label: 'Personal Details' },
          { status: 'untouched', label: 'Bank Details' },
          { status: 'active', label: 'Vehicle Details' },
        ]}
      />
      <View style={tw`my-4`} />

      <DateInput
        onValue={alert}
        color="text-green-600"
        textStyle={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
        viewStyle={[
          tw`flex-row py-4 px-8 rounded-2 items-center border-2 border-green-600 self-start`,
        ]}
      />
      <View style={tw`my-4`} />

      <ReferCode code="SUGGAREF25" />
      <View style={tw`my-4`} />

      <View style={{ width: '100%', paddingHorizontal: 54 }}>
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
          value={value}
          label="Full name"
          errorText={error}
          onChangeText={(text) => setValue(text)}
          selectionColor={COLORS.SPANIS_VIRIDIAN}
        />
      </View>
      <View style={{ height: 16 }} />
      <Button
        title={error ? 'Clear error' : 'Set Error'}
        onPress={() => (error ? setError('') : setError('This field is required.'))}
      />
      <View style={tw`my-4`} />
      <PressableButton onPress={() => {}} icon={SHARE} />
      <View style={tw`my-4`} />
      <OnOffDutySwitch />
      <View style={tw`my-4`} />
      <SuggaaSelectButton
        title="Him"
        onPress={(value) => setSelectedCheckBox(value)}
        isActive={selectedCheckBox === 'Him'}
      />
      <View style={tw`my-4`} />
      <SuggaaSelectButton
        title="Her"
        onPress={(value) => setSelectedCheckBox(value)}
        isActive={selectedCheckBox === 'Her'}
      />
      <View style={tw`my-4`} />
      <SuggaaSelectButton
        title="I perfer not to say"
        onPress={(value) => setSelectedCheckBox(value)}
        isActive={selectedCheckBox === 'I perfer not to say'}
      />
      <View style={tw`my-4`} />
      <SelectRide ride_type="City" />
      <View style={tw`my-4`} />
      <SelectRide ride_type="Outstation" />
      <ProfilePicture
        defaultImage={require('../assets/picture.jpg')}
        setPickedImage={(img: string) => {}}
      />
      <SuggaaStarRating rating={3} />
      <Star rating={rating} setRating={setRating} />
      <SuggaaSlidingButton
        text="Cancle Ride"
        lightColor="#F58E8E"
        darkColor="#EA1D1D"
        onToggle={handleToggle}
      />
      <SuggaaSlidingButton
        text="Rider Located"
        lightColor="#81C0AE"
        darkColor="#04825C"
        onToggle={handleToggle}
      />
      <ExpoSvg
        steps={[
          { label: 'Mon', earning: 200 },
          { label: 'Tue', earning: 70 },
          { label: 'Wed', earning: 100 },
          { label: 'Thu', earning: 50 },
          { label: 'Fri', earning: 90 },
          { label: 'Sat', earning: 120 },
          { label: 'Sun', earning: 160 },
        ]}
      />
      <SuggaaDriverRating
        steps={[
          { star: 1, rating: 170 },
          { star: 2, rating: 37 },
          { star: 3, rating: 76 },
          { star: 4, rating: 10 },
          { star: 5, rating: 14 },
        ]}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
// }
