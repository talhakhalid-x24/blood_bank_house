import React from 'react';
import { StyleSheet,ImageBackground, Text, View ,Image, TouchableOpacity } from 'react-native';

import heartbeat from '../../assets/images/heartbeat.png';
import bg from '../../assets/images/bg.png';
import logo from '../../assets/images/logo.png';
import bloodDrop from '../../assets/images/blood_drop.png';

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bgImage}>
        <ImageBackground source={bloodDrop} style={styles.bgImage}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Blood Bank House</Text>
          <Image style={styles.heartbeat} source={heartbeat}  />
          <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Home')}
              style={styles.appButtonContainer}
          >
              <Text style={styles.appButtonText}>Get start</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage : {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width:'100%',
    alignItems: 'center',
  },
  logo:{
    width: "28%",
    resizeMode: 'stretch',
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight:'bold',
    color:'#000',
  },
  heartbeat:{
    width: "90%",
    resizeMode: 'stretch',
    height: 200,
    top:20
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 50,
    top:'12%'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 10,
    paddingHorizontal: 48
  },
});
