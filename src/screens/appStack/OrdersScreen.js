import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';
import {Icon, SegmentedButtons} from 'react-native-paper';
import StoreCard from '../../common/components/StoreCard';
import MealCard from '../../common/components/MealCard';
import {themeColors} from '../../common/utilities/theme';

const OrderScreen = () => {
  const [value, setValue] = useState('meal');
  return (
    <SafeAreaView className="flex-1 bg-white">
      <CommonHeader heading={'Orders'} />
      <SegmentedButtons
        className="m-4"
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'meal',
            label: 'Meals',
            style: {
              backgroundColor:
                value == 'meal' ? themeColors.bgColor(0.5) : 'white',
            },
          },
          {
            value: 'store',
            label: 'Store',
            style: {
              backgroundColor:
                value == 'store' ? themeColors.bgColor(0.5) : 'white',
            },
          },
        ]}
      />
      <ScrollView className="p-2">
        {value === 'meal' ? <MealCard /> : <StoreCard />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
