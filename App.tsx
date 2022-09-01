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
import React from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';

import AboutScreen from './src/About';
import BottomSheet from './src/BottomSheet';
import HomeScreen from './src/Home';
import InsuranceScreen from './src/Insurance';
import PaymentsScreen from './src/Payments';
import ReferAndEarnScreen from './src/ReferAndEarn';
import SettingsScreen from './src/Settings';
import SuggaaComponents from './src/SuggaaComponents';
import SupportScreen from './src/Support';
import YourRidesScreen from './src/YourRides';
import * as COLORS from './src/config/colors';
import * as IMAGES from './src/config/images';
import DrawerComponent from './src/navigation/DrawerComponent';
import TopTabNavigationScreen from './src/navigation/TopTabNavigation';
import MapsScreen from './src/MapsScreen';

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
  // const [value, setValue] = React.useState('');
  // const [error, setError] = React.useState<string | null>(null);
  // const [selectedCheckBox] = React.useState('');
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
        <Drawer.Screen name="SuggaaComponents" component={SuggaaComponents} />
        <Drawer.Screen name="BottomSheet" component={BottomSheet} />
        <Drawer.Screen name="MapsScreen" component={MapsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// }
