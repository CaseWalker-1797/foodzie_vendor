import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonInputField from '../../common/components/CommonInputField';
import {personalInfoField} from '../../common/constants/Constants';
import CommonButton from '../../common/components/CommonButton';
import {themeColors} from '../../common/utilities/theme';

const GetPersonalInfoScreen = () => {
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    setPersonalInfo(personalInfoField);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border p-3">
        <Text className="text-2xl font-semibold">Personal Information</Text>
      </View>
      <ScrollView>
        <Text className="text-lg py-3">
          Enter the details below so that can get know and serve you better
        </Text>
        {/* Personal Info Fields */}
        {personalInfo.map(item => {
          return (
            <CommonInputField item={item} background={themeColors.bgColor(1)} />
          );
        })}
        <CommonButton title={'Submit'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetPersonalInfoScreen;

const styles = StyleSheet.create({});
