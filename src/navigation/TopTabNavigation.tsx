import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../config/colors';

function ActiveScreen() {
  return (
    <View style={tw`items-center justify-cnter`}>
      <Text>Active!</Text>
    </View>
  );
}

function RejectedeScreen() {
  return (
    <View style={tw`items-center justify-cnter`}>
      <Text>Rejected!</Text>
    </View>
  );
}

function PendingScreen() {
  return (
    <View style={tw`items-center justify-cnter`}>
      <Text>Pending!</Text>
    </View>
  );
}

function DeactivatedScreen() {
  return (
    <View style={tw`items-center justify-cnter`}>
      <Text>Pending!</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw`h-16`}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={tw`mx-3.75 py-3.25 ${isFocused ? 'border-b-2' : ''} h-14`}>
            <Text
              style={tw`text-5 text-[${
                isFocused ? COLORS.SPANIS_VIRIDIAN : COLORS.LIGHT_GRAY_BORDER
              }]`}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} initialRouteName="Active">
      <Tab.Screen name="Active" component={ActiveScreen} options={{ tabBarLabel: 'Active' }} />
      <Tab.Screen
        name="Rejected"
        component={RejectedeScreen}
        options={{ tabBarLabel: 'Rejected' }}
      />
      <Tab.Screen name="Pending" component={PendingScreen} options={{ tabBarLabel: 'Pending' }} />
      <Tab.Screen
        name="Deactivated"
        component={DeactivatedScreen}
        options={{ tabBarLabel: 'Deactivated' }}
      />
    </Tab.Navigator>
  );
}
export default function TopTabNavigation() {
  return <MyTabs />;
}
