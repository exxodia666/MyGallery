import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({ url, descr, id }) => {
    return (<View style={styles.container}>
        <Image source={{ uri: url }} style={{ width: 200, height: 200 }} />
        <Text>
            {descr}
        </Text>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        //backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})
export default Post;
