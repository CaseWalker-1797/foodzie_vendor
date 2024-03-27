import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/authStack/SignInScreen';
import SignUpScreen from '../screens/authStack/SignUpScreen';
import ForgotPasswordScreen from '../screens/authStack/ForgotPasswordScreen';
import {checkUser} from '../api/API';
import GetPersonalInfoScreen from '../screens/authStack/GetPersonalInfoScreen';
import DocumentVerificationScreen from '../screens/authStack/DocumentVerificationScreen';
import DocumentUploadScreen from '../screens/authStack/DocumentUploadScreen';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="PersonalInfo"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="PersonalInfo" component={GetPersonalInfoScreen} />
      <Stack.Screen
        name="DocVerification"
        component={DocumentVerificationScreen}
      />
      <Stack.Screen name="DocUpload" component={DocumentUploadScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;
