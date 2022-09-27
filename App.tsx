import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';

import AboutScreen from './src/About';
import BookingScreen from './src/BookingScreen';
import BottomSheet from './src/BottomSheet';
import CouponList from './src/CouponsList';
import HomeScreen from './src/Home';
import InsuranceScreen from './src/Insurance';
import LottiesList from './src/LottiesList';
import MapRideTestScreen from './src/MapRideTest';
import MapsScreen from './src/MapsScreen';
import PaymentSheet from './src/PaymentSheet';
import PaymentsScreen from './src/Payments';
import ReferAndEarnScreen from './src/ReferAndEarn';
import SettingsScreen from './src/Settings';
import Splash from './src/SplashScreen';
import SplashScreenDriver from './src/SplashScreenDriver';
import SplashScreenFleet from './src/SplashScreenFleet';
import SuggaaComponents from './src/SuggaaComponents';
import SupportScreen from './src/Support';
import YourRidesScreen from './src/YourRides';
import * as COLORS from './src/config/colors';
import * as IMAGES from './src/config/images';
import DrawerComponent from './src/navigation/DrawerComponent';
import TopTabNavigationScreen from './src/navigation/TopTabNavigation';
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();
type iconProps = {
  image: number;
};
const Stack = createStackNavigator();

function RideBookedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomSheet"
        component={BottomSheet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentSheet"
        component={PaymentSheet}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  const LABEL_STYLE = tw`ml--6 text-4 text-[${COLORS.BLACK}]`;
  // const [value, setValue] = React.useState('');
  // const [error, setError] = React.useState<string | null>(null);
  // const [selectedCheckBox] = React.useState('');
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
              drawerIcon: () => <Icon image={IMAGES.PAYMENT} />,
              drawerLabelStyle: LABEL_STYLE,
            }}
          />
          <Drawer.Screen
            name="Insurance"
            component={InsuranceScreen}
            options={{
              drawerIcon: () => <Icon image={IMAGES.INSURANCE} />,
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
          <Drawer.Screen
            name="Ride Booked"
            component={RideBookedNavigator}
            options={{ header: () => null }}
          />
          <Drawer.Screen name="MapsScreen" component={MapsScreen} />
          <Drawer.Screen name="RideScreen Test" component={MapRideTestScreen} />
          <Drawer.Screen name="BookingScreen" component={BookingScreen} />
          <Drawer.Screen name="Coupons List" component={CouponList} />
          <Drawer.Screen name="Lotties" component={LottiesList} />
          <Drawer.Screen
            name="Splash screen Rider"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Splash screen Driver"
            component={SplashScreenDriver}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Splash screen Fleet"
            component={SplashScreenFleet}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
