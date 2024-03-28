import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CommonButton = ({title, background, onPress}) => {
  return (
    <TouchableOpacity
      className="justify-center items-center m-2 p-2 rounded-full"
      style={{backgroundColor: background}}
      onPress={onPress}>
      <Text className="text-lg text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
