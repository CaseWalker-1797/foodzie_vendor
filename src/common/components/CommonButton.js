import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CommonButton = ({title, background}) => {
  return (
    <TouchableOpacity
      className=" border justify-center items-center m-2 p-2 rounded-full"
      style={{backgroundColor: background}}>
      <Text className="text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
