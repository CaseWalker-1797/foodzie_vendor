import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon, IconButton} from 'react-native-paper';
import OrderCard from './OrderCard';
import {themeColors} from '../utilities/theme';
import { getOrder } from '../../api/API';

const StoreCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrder().then(data1 => {
      setData(data1);
    });
  }, []);

  const renderData = ({item}) => {
    // return <OrderCard item={item} />;
  };

  return (
    <View
      className="bg-white justify-center border border-gray-100 m-2 space-y-2 rounded-2xl"
      style={styles.container}>
      <View className="justify-center p-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold">Pickup Center 1</Text>
          <View className="flex-row">
            <IconButton
              icon="phone"
              size={20}
              iconColor={'white'}
              containerColor={themeColors.bgColor(1)}
            />
            <IconButton
              icon="near-me"
              size={20}
              iconColor={'white'}
              containerColor={themeColors.bgColor(1)}
            />
          </View>
        </View>
        <Text className="font-medium">Address of Restaurant</Text>
      </View>
      <FlatList data={data} renderItem={renderData} />
    </View>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 9,
  },
});
