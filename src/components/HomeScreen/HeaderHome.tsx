import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image, Button } from '@rneui/base';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const HeaderHome = () => {

  const widthWindow = Dimensions.get('window').width;

  return (
    <View>
      <View style={{...styles.header, width: widthWindow}}>
          <Image
            source={require('../../assets/facebook-white.png')}
            style={styles.image}
          />
          <View style={styles.actions}>
            <Button
              buttonStyle={styles.button}
              color={'#3a3c3b'}
              >
              <AwesomeIcon name="plus" size={20} color="#fff" />
            </Button>
            <Button
              buttonStyle={styles.button}
              color={'#3a3c3b'}
              >
              <AwesomeIcon name="search" size={20} color="#fff" />
            </Button>
            <Button
              buttonStyle={styles.button}
              color={'#3a3c3b'}
              >
              <AwesomeIcon name="facebook-messenger" size={20} color="#fff" />
            </Button>
          </View>
        </View>
        <View style={{...styles.user, width: widthWindow}}>
          <View style={styles.post}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.profile}
            />
            <Text style={styles.text}>¿Qué éstas pensando?</Text>
          </View>
          <AwesomeIcon name="images" size={25} color="#3ec062" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242527',
    paddingHorizontal: 10,
    paddingTop: 15,
    height: 70,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 120,
    height: 25,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  user: {
    backgroundColor: '#242527',
    height: 70,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
});

export default HeaderHome;
