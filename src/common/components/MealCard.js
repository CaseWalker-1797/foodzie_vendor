import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import OrderCard from './OrderCard';
import {getOrder} from '../../api/API';

const MealCard = () => {
  const renderData = ({item}) => {
    return (
      <View
        className="bg-white my-2 p-1 border border-gray-100 rounded-2xl"
        style={styles.container}>
        <OrderCard item={item} />
      </View>
    );
  };
  return (
    <View className="space-y-2">
      <FlatList data={getOrder} renderItem={renderData} />
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
});
