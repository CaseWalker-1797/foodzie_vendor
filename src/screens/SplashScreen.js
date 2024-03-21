import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Drawable} from '../common/utilities/Drawables';
import {verticalScale} from '../common/utilities/Dimension';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const value = await AsyncStorage.getItem('userToken');
    console.log('value', value);
    setTimeout(() => {
      navigation.navigate(value ? 'App' : 'Auth');
    }, 3000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        source={Drawable.SignUp}
        style={{height: verticalScale(500), width: '100%'}}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
