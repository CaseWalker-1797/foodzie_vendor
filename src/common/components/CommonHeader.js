import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CommonHeader = ({heading}) => {
  return (
    <View className="justify-center items-center p-4">
      <Text className="text-2xl font-bold">{heading}</Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
