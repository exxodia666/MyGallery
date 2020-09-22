import {observer} from 'mobx-react';
//import {observer} from 'mobx';
//import {inject} from 'react-mobx';
import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';
import RootModel from '../models/RootModel';
import {status} from '../utills/constants';
const url = 'https://reactnative.dev/img/tiny_logo.png';
const descr = 'Kekwait picture here';
const id = 3124124;

const Home = (props) => {
  const pictures = RootModel.picturesStore.pictures;
  const state = RootModel.picturesStore.state;
  console.log(pictures[5].user.name);
  console.log(pictures[5].urls.full);
  useEffect(() => {
    RootModel.picturesStore.savePictures();
  }, [state]);

  if (state === status.pending) {
    <Text>Loading!!!</Text>;
  } else if (state === status.done) {
    return (
      <View style={styles.container}>
        <ScrollView>
          {pictures.map((pic) => {
            return (
              <Post
                url={pic.urls.full}
                descr={pic.description || pic.alt_description}
                id={pic.id}
                author={pic.user.name}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  } else if (state === status.error) {
    <Text>error</Text>;
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(Home);
