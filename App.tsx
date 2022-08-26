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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Image } from 'react-native';
import tw from 'twrnc';

import AboutScreen from './src/About';
import AnimatedText from './src/AnimatedText';
import HomeScreen from './src/Home';
import InsuranceScreen from './src/Insurance';
import DateInput from './src/MaskedText/DateInput';
import OTPInputs from './src/OTPInputs';
import OnOffDutySwitch from './src/OnOffDutySwitch';
import PaymentsScreen from './src/Payments';
import PressableButton from './src/PressableButton';
import ProgressAnimation from './src/ProgressAnimation';
import ReferAndEarnScreen from './src/ReferAndEarn';
import ReferCode from './src/ReferCode';
import SettingsScreen from './src/Settings';
import SuggaaSelectButton from './src/SuggaaSelectButton';
import SuggaaTextInput from './src/SuggaaTextInput';
import SupportScreen from './src/Support';
import YourRidesScreen from './src/YourRides';
import * as COLORS from './src/config/colors';
import * as IMAGES from './src/config/images';
import DrawerComponent from './src/navigation/DrawerComponent';
import TopTabNavigationScreen from './src/navigation/TopTabNavigation';

const Drawer = createDrawerNavigator();
type iconProps = {
  image: number;
};

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Poppins_300Light,
  //   Poppins_400Regular,
  //   Poppins_600SemiBold,
  //   Poppins_400Regular_Italic,
  //   Poppins_500Medium,
  //   Poppins_700Bold,
  //   Poppins_900Black,
  // });
  const LABEL_STYLE = tw`ml--6 text-4 text-[${COLORS.BLACK}]`;
  const SHARE = require('./assets/Share.png');
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  const Icon = ({ image }: iconProps) => {
    return <Image resizeMode="contain" source={image} />;
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerComponent {...props} />}
        initialRouteName="Home">
        <Drawer.Screen
          name="Your Rides"
          component={YourRidesScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.RIDES} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen
          name="Payments"
          component={PaymentsScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.PAYEMNT} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen
          name="Insurance"
          component={InsuranceScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.INCURANCE} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen
          name="Refer & Earn"
          component={ReferAndEarnScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.REFER_AND_EARN} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen
          name="Support"
          component={SupportScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.SUPPORT} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.SETTINGS} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: () => <Icon image={IMAGES.ABOUT} />,
            drawerLabelStyle: LABEL_STYLE,
          }}
        />
        <Drawer.Screen name="My Components" component={HomeScreen} />
        <Drawer.Screen name="Top Tab" component={TopTabNavigationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

// eslint-disable-next-line no-lone-blocks
{
  /* <View style={styles.container}>
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
    </View> */
}
