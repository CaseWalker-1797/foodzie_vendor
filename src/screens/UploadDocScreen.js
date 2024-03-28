import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonUploadField from '../common/components/CommonUploadField';
import CommonButton from '../common/components/CommonButton';
import {themeColors} from '../common/utilities/theme';
import {IconButton, Snackbar} from 'react-native-paper';

const UploadDocScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  let item = params;
  const [visible, setVisible] = useState(false);

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
        <CommonUploadField />
        <CommonButton
          title={'Submit'}
          background={themeColors.bgColor(1)}
          onPress={() => {
            setVisible(true);
            setTimeout(() => {
              navigation.goBack();
            }, 2000);
          }}
        />
      </View>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
        Document submitted successfully
      </Snackbar>
    </SafeAreaView>
  );
};

export default UploadDocScreen;

const styles = StyleSheet.create({});
