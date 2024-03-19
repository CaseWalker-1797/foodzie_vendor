import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen3 from '../../screens/appStack/Screen3';
import Screen4 from '../../screens/appStack/Screen4';
import OrderScreen from '../../screens/appStack/OrdersScreen';
import {Icon} from 'react-native-paper';
import AccountScreen from '../../screens/appStack/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Orders"
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
        }}>
        <Tab.Screen
          name="Orders"
          component={OrderScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                source={focused ? 'shopping' : 'shopping-outline'}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                source={focused ? 'account' : 'account-outline'}
                size={24}
              />
            ),
          }}
        />

        {/* <Tab.Screen name="s3" component={Screen3} /> */}
        {/* <Tab.Screen name="s4" component={Screen4} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
