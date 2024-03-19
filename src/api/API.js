import Axios from 'react-native-axios';
import _ from 'lodash';

export const getOrder = async ({id}) => {
  const res = await Axios({
    method: 'GET',
    url: urlFor + `/api/v1/order`,
  });
  const data1 = res.data.data;
  return data1;
  console.log('order++++>>>', data1);
};
