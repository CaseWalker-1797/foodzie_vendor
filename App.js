import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNav from './src/navigation/appNav/AppNav';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNav />
    </SafeAreaProvider>
  );
};

export default App;
