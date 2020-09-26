import {observer} from 'mobx-react';
//import {observer} from 'mobx';
//import {inject} from 'react-mobx';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';
import RootModel from '../models/RootModel';
import {status} from '../utills/constants';

const Home = (props) => {
  const pictures = RootModel.picturesStore.pictures;
  //const state = RootModel.picturesStore.state;
  const [state, setState] = useState(false);
  const [error, setError] = useState(false);

  const handleNavigation = (pic) => {
    props.navigation.navigate('Picture', {pic: pic});
  };

  useEffect(() => {
    try {
      RootModel.picturesStore.savePictures();
      console.log('ERROR SUKA');
      setState(true);
    } catch (e) {
      console.log('ERRRROOOOOOOOOOOOOOOOR');
      setError(e);
    }
  }, []);

  if (error === true) {
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>ERROR</Text>;
    </View>;
  } else if (error === false) {
    if (state === false) {
      <Text>Loading!!!</Text>;
    } else if (state === true) {
      return (
        <View style={styles.container}>
          <ScrollView style={{width: '100%'}}>
            {pictures.map((pic) => {
              return (
                <Post
                  url={pic.urls.full}
                  descr={pic.description || pic.alt_description}
                  key={pic.id}
                  author={pic.user.name}
                  handleNavigation={() => handleNavigation(pic)}
                />
              );
            })}
          </ScrollView>
        </View>
      );
    }
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
