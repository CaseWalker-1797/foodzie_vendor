import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Drawable} from '../common/utilities/Drawables';
import {verticalScale} from '../common/utilities/Dimension';
import * as Animatable from 'react-native-animatable';

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
    <SafeAreaView className="flex-1 items-center bg-white">
      <Image
        source={Drawable.Loading}
        style={{
          resizeMode: 'contain',
          height: verticalScale(495),
          width: '100%',
        }}
      />
      <Animatable.Text
        animation="flash"
        easing="ease-out"
        delay={1500}
        duration={3000}
        // iterationCount="infinite"
        className="text-2xl font-bold">
        We'll be there soon...
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
