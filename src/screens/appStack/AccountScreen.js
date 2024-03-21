import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CommonHeader from '../../common/components/CommonHeader';
import {Avatar, Icon} from 'react-native-paper';
import {accountOptions} from '../../common/constants/Constants';
import OptionCard from '../../common/components/OptionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(accountOptions);
  }, []);

  const clearAll = async () => {
    await AsyncStorage.clear();
    console.log('Done.');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CommonHeader heading={'Account'} />
      <View className="flex-row justify-center items-center p-2 space-x-2">
        <Avatar.Icon size={64} icon="account" />
        <View className="flex-1 justify-center p-1 space-y-1">
          <Text className="text-base font-bold">Veer J Kamdar</Text>
          <Text>+91 8777644006</Text>
          <Text>veerkamdar123@gmail.com</Text>
        </View>
      </View>
      <ScrollView>
        {options.map(option => (
          <OptionCard key={option.id} option={option} />
        ))}
        <TouchableOpacity
          className="flex-row bg-white justify-center border border-gray-100 m-2 p-2 rounded-full"
          style={styles.container}
          onPress={() => {
            clearAll();
            navigation.navigate('Auth');
          }}>
          <View className="flex-1 flex-row bg-white justify-center items-center  space-x-4">
            <Icon source="logout" size={24} />
            <Text className="text-xl font-bold">Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#F97316',
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 9,
  },
});
