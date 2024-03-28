import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {docUploadFeild} from '../../common/constants/Constants';
import CommonOption from '../../common/components/CommonOption';
import CommonButton from '../../common/components/CommonButton';
import {themeColors} from '../../common/utilities/theme';
import {useNavigation} from '@react-navigation/native';

const DocumentUploadScreen = () => {
  const navigation = useNavigation();
  const [document, setDocument] = useState([]);
  useEffect(() => {
    setDocument(docUploadFeild);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-3 space-y-6">
        <Text className="text-2xl font-bold ">
          Welcome Foodzie Delivery Partner
        </Text>
        <Text className="text-lg">
          Just few steps to completeand then you can start earning with us
        </Text>
        <ScrollView>
          {document.map(item => {
            return <CommonOption item={item} />;
          })}
        </ScrollView>
      </View>
      <CommonButton
        title={'Submit'}
        background={themeColors.bgColor(1)}
        onPress={() => navigation.navigate('App')}
      />
    </SafeAreaView>
  );
};

export default DocumentUploadScreen;

const styles = StyleSheet.create({});
