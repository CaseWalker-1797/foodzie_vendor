import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../../screens/appStack/Screen1';
import Screen2 from '../../screens/appStack/Screen2';
import Screen3 from '../../screens/appStack/Screen3';
import Screen4 from '../../screens/appStack/Screen4';
import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomBottomTab {...props} />}
        screenOptions={{ headerShown: false }}>
      <Tab.Group>
        <Tab.Screen name="s1" component={Screen1} />
        <Tab.Screen name="s2" component={Screen2} />
        <Tab.Screen name="s3" component={Screen3} />
        <Tab.Screen name="s4" component={Screen4} /></Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
