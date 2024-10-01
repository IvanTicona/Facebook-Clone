import { StyleSheet, View } from 'react-native';
import React from 'react';
import HeaderHome from '../components/HomeScreen/HeaderHome';
import StoriesHome from '../components/HomeScreen/StoriesHome';
import PostComponent from '../components/HomeScreen/PostComponent';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderHome/>
      <StoriesHome/>
      <PostComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#18191b',
    gap: 5,
  },
});

export default HomeScreen;
