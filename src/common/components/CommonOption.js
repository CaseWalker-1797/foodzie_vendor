import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CommonOption = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="flex-row bg-white justify-between items-center mx-1 my-2 p-4 rounded-xl"
      style={styles.container}
      onPress={() => navigation.navigate(item.go, {...item})}>
      <Text className="text-lg">{item.name}</Text>
      <Icon source="chevron-right" size={24} />
    </TouchableOpacity>
  );
};

export default CommonOption;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
});
