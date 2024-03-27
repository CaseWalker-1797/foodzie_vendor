import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CommonInputField = ({key, item}) => {
  return (
    <View key={key} className="border space-y-2 m-2 p-1">
      <Text className="text-base font-semibold">{item.name}</Text>
      <TouchableOpacity className="border bg-gray-100 border-gray-500 p-2 rounded-lg">
        <Text className="text-sm text-gray-400 font-medium">
          {item.placeholder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonInputField;

const styles = StyleSheet.create({});
