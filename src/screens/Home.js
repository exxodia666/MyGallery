import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';

const Home = () => {

    const url = 'https://reactnative.dev/img/tiny_logo.png';
    const descr = 'Kekwait picture here';
    const id = 3124124;
    return (<View style={styles.container}>
        <Icon name='home' size={80} color='black' />
        <Text style={{ fontSize: 26 }}>Home</Text>
        <ScrollView>
            <Post url={url} descr={descr} id={id} />
        </ScrollView>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})
export default Home;
