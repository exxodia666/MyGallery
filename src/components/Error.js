import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Error = ({refresh, error}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{error}</Text>
        <TouchableOpacity onPress={refresh}>
          <Icon name="refresh" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Error;
