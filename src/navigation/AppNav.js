import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen3 from '../screens/appStack/Screen3';
import Screen4 from '../screens/appStack/Screen4';
import OrderScreen from '../screens/appStack/OrdersScreen';
import {Icon} from 'react-native-paper';
import AccountScreen from '../screens/appStack/AccountScreen';
import {themeColors} from '../common/utilities/theme';

const Tab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: themeColors.bgColor(1),
        tabBarLabelStyle: {fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              source={focused ? 'shopping' : 'shopping-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              source={focused ? 'account' : 'account-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNav;
