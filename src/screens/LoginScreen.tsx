import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Button, Image } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí implementarás la lógica de autenticación
    // Por ahora, simplemente navegamos a Home
    navigation.replace('Home');
  };

  return (
    <LinearGradient
      colors={['#204263', '#1e313e', '#397378']}
      useAngle
      angle={135}
      angleCenter={{ x: 0, y: 1}}
      // start={{ x: 0, y: 0.8 }}
      // end={{ x: 1, y: 1.8 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image
          source={require('../assets/fb_logo.png')}
          style={styles.image}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Celular o correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={'#8694a0'}
        />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={'#8694a0'}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} color={'#0064e0'} buttonStyle={styles.button}/>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <Button title="Crear cuenta nueva" type="outline" color={'#5693c8'} buttonStyle={styles.button}/>
      <View style={styles.footer}>
        <Image
          source={require('../assets/meta.png')}
          style={styles.meta}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1c3142',
  },
  input: {
    height: 60,
    borderColor: '#41535f',
    backgroundColor: '#1c2a33',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    paddingLeft: 15,
    fontFamily: 'OpenSans-Regular',
  },
  link: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 120,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    marginTop: 10,
    borderRadius: 25,
    height: 50,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
  },
  image: {
    width: 70,
    height: 70,
  },
  meta: {
    width: 75,
    height: 14.5,
  },
  footer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
