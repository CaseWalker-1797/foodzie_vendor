import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const CommonInputField = ({item}) => {
  const [value, setValue] = useState('');
  return (
    <View key={item.id} className="space-y-2 m-2 p-2">
      <Text className="text-base font-semibold">{item.name}</Text>
      <TextInput
        className="border bg-gray-100 border-gray-500 p-3 rounded-lg text-base"
        placeholder={item.placeholder}
        onChangeText={text => setValue(text)}
        value={value}
      />
    </View>
  );
};

export default CommonInputField;

const styles = StyleSheet.create({});
