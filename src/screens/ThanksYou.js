import React from 'react';
import { StyleSheet, Text, View , Image,TouchableOpacity } from 'react-native';
import thankyou from '../../assets/images/thankyou.png';
import { AntDesign } from '@expo/vector-icons'; 

function ThanksYou({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Thank you for registering!</Text>
            <View style={{width:'80%',marginTop:20}}>
                <Text style={styles.text}>Our Agent will call you and verify the details.</Text>
                <Text style={styles.text}>Once this process is done your bloodgroup will be listed at our websites.</Text>
            </View>
            <View style={styles.serviceItem}>
                <Image source={thankyou} style={styles.serviceImage} />
            </View>
            <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.appButtonText}> <AntDesign name="doubleleft" size={22} color="black" /> Go To Home</Text>
                </TouchableOpacity>
        </View>
    );
}

export default ThanksYou;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center'
    },

    heading:{
        fontSize:30,
        fontWeight:'bold'
    },

    text:{
        color:'gray',
        textAlign:'center',
    },
    
    serviceItem : {
        width: '100%',
        alignItems: 'center',
    },
    serviceImage : {
        width: '90%',
        resizeMode: 'stretch',
        height:100
    },
    appButtonText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      paddingVertical: 20,
    }
})