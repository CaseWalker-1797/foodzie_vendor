import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonOption from '../../common/components/CommonOption';
import {IconButton} from 'react-native-paper';

const DocumentVerificationScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  let item = params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <IconButton
        icon="chevron-left"
        size={32}
        onPress={() => navigation.goBack()}
      />
      <View className="p-3 space-y-6">
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text className="text-base">{item.message}</Text>
        {item.upload.map(item => (
          <CommonOption item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DocumentVerificationScreen;

const styles = StyleSheet.create({});
