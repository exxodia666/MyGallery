import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const Post = ({url, descr, handleNavigation, author}) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={handleNavigation}>
      <Image source={{uri: url}} style={{width: '100%', height: 300}} />
      <View style={styles.textDiv}>
        <Text>{descr}</Text>
        <Text style={styles.author}>Created by {author}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  textDiv: {
    padding: 10,
  },
  author: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    paddingBottom: 5,
    //marginBottom: 20,
    elevation: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Post;
