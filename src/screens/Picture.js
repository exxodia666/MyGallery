import {observer} from 'mobx-react';
//import {observer} from 'mobx';
//import {inject} from 'react-mobx';
import React, {useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';
import RootModel from '../models/RootModel';
import {status} from '../utills/constants';

const Picture = (props) => {
  const url = props.route.params;
  console.log(url);
  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={{width: '100%', height: '100%'}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Picture;
