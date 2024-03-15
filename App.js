import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNav from './src/navigation/appNav/AppNav';
import CustomBottomTab from './src/navigation/appNav/CustomBottomTab';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <CustomBottomTab/> */}
      <AppNav />
    </SafeAreaProvider>
  );
};

export default App;
