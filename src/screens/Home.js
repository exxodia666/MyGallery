import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Post from '../components/Post';
import RootModel from '../models/RootModel';
import Error from '../components/Error';
import Loading from '../components/Loading';

const Home = (props) => {
  const pictures = RootModel.picturesStore.pictures;
  const [state, setState] = useState(false);

  const handleNavigation = (pic) => {
    props.navigation.navigate('Picture', {pic: pic});
  };

  const refreshPictures = () => {
    setState(false);
  };

  useEffect(() => {
    RootModel.picturesStore.savePictures();
    setState(true);
  }, [state]);

  if (!state) {
    //LOADING!!
    return <Loading />;
  } else if (state) {
    const error = RootModel.picturesStore.error;
    if (error.state) {
      return <Error refresh={refreshPictures} error={error.message} />;
    } else if (!error.state) {
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
