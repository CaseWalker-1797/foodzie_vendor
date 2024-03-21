import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNav from './src/navigation/AppNav';
import MainNav from './src/navigation/MainNav';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNav />
    </SafeAreaProvider>
  );
};

export default App;
