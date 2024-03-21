import Axios from 'react-native-axios';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const urlFor = 'http://192.168.1.11:3000';

export const newUser = ({name, email, password, confirmPassword}) => {
  Axios.post(urlFor + '/api/v1/user/signup', {
    name: name,
    email: email,
    password: password,
    passwordConfirm: confirmPassword,
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const checkUser = ({email, password}) => {
  Axios.post(urlFor + '/api/v1/user/login', {
    email: email,
    password: password,
  })
    .then(async response => {
      const useToken = response.data.token;
      await AsyncStorage.setItem('userToken', useToken);
    })
    .catch(error => {
      console.log(error.response.data);
    });
};

export const getOrder = async () => {
  const res = await Axios({
    method: 'GET',
    url: urlFor + `/api/v1/order`,
  })
    .then(function (res) {
      const data1 = res.data.data;
      return data1;
    })
    .catch(function (error) {
      console.log('error++++>>>', error);
    });

  return res;
};
