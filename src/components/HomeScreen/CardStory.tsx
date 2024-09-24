import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const CardStory = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/mock/story3.jpeg')}
        alt="story"
        style={styles.image}
      />
      <Text style={styles.name}>Adrian Thompson</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 180,
    borderRadius: 15,
  },
  name: {
    position: 'absolute',
    top: '90%',
    left: '55%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
  },
});

export default CardStory;
