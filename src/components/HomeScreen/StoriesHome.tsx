import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import AddPost from './AddPost';
import CardStory from './CardStory';

const StoriesHome = () => {

  const widthWindow = Dimensions.get('window').width;

  return (
    <View style={{...styles.section, width: widthWindow}}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scroll}>
        <AddPost/>
        <CardStory/>
        <CardStory/>
        <CardStory/>
        <CardStory/>
        <CardStory/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section:{
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242527',
  },
  scroll: {
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 5,
  },
});

export default StoriesHome;
