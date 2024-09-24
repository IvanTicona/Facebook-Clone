import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

const AddPost = () => {
  return (
    <View style={styles.post}>
      <Image
        source={require('../../assets/user.png')}
        alt="story"
        style={styles.image}
      />
      <Text style={styles.name}>Crear historia...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
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
    backgroundColor: '#333436',
    width: 102,
    height: 50,
    // borderRadius: (15, 15, 0, 0),
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
  },
});

export default AddPost;
