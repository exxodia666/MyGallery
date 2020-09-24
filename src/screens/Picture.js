import React, {useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';

const Picture = (props) => {
  const url = props.route.params.pic.urls.full;
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
