import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CommonHeader from '../../common/components/CommonHeader';
import {Avatar, Icon} from 'react-native-paper';
import {accountOptions} from '../../common/constants/Constants';
import OptionCard from '../../common/components/OptionCard';

const AccountScreen = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(accountOptions);
  }, []);

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
