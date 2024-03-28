import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {horizontalScale, verticalScale} from '../utilities/Dimension';
import {themeColors} from '../utilities/theme';

const CommonUploadField = ({item}) => {
  return (
    <View
      className="justify-center items-center m-2 "
      style={{
        height: verticalScale(250),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 12,
        borderColor: 'gray',
      }}>
      <Button
        className="font-bold"
        mode="outlined"
        icon="camera"
        textColor={themeColors.bgColor(1)}
        buttonColor="white"
        onPress={() => {}}>
        Upload Photo
      </Button>
    </View>
  );
};

export default CommonUploadField;

const styles = StyleSheet.create({});
