import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({url, descr, id, author}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={{width: '100%', height: 200}} />
      <Text>{descr}</Text>
      <Text>Created by {author}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    elevation: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Post;
