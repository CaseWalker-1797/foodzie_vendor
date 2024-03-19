import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IconButton, Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {themeColors} from '../utilities/theme';

const OrderCard = ({item}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View className="justify-center">
      <View className="flex-row justify-between items-center p-2">
        <Text className="">
          Order No.
          <Text className="">{' ' + item.foodItem}</Text>
        </Text>
        <IconButton
          icon={showDetails ? 'chevron-up' : 'chevron-down'}
          size={20}
          iconColor={themeColors.bgColor(1)}
          onPress={() => {
            setShowDetails(!showDetails);
          }}
        />
      </View>
      {showDetails && (
        <View className="p-2 space-y-2">
          <Text>Veer J Kamdar</Text>
          <View className="flex-row justify-between items-center ">
            <Text>Delivery Address of Order</Text>
            <IconButton icon="near-me" size={20} />
          </View>

          <Button
            mode="contained"
            buttonColor={themeColors.bgColor(1)}
            textColor="white">
            <Text className="font-bold">Confirm Pickup</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
