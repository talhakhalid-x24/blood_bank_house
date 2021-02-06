import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
// import picture from '../../assets/images/tala.jpg';

function Profile({route}){
    return(
        <View style={styles.container}>
            <View style={styles.extraSpace}></View>
            <View style={styles.detail}>
                <View style={styles.image}>
                    {/* <Image source={picture} style={styles.serviceImage} /> */}
                </View>
                <Text style={styles.name}>{route.params.name}</Text>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Location</Text>
                    <Text style={styles.infoFoot}>{route.params.location}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Blood Group</Text>
                    <Text style={styles.infoFoot}>{route.params.blood}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Phone</Text>
                    <Text style={styles.infoFoot}>{route.params.number}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Age</Text>
                    <Text style={styles.infoFoot}>{route.params.age} Years</Text>
                </View>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },
    extraSpace:{
        backgroundColor:'#e96950',
        height:100,
        width:'100%'
    },
    detail:{
        width:'90%',
        marginHorizontal:'auto',
        marginVertical: 10,
        top:'-13%'
    },
    image: {
        backgroundColor:'#e96950',
        width:'50%',
        justifyContent:'center',
        borderRadius:'50%',
        height:165,
        alignSelf:'center',
    },
    serviceImage : {
        height: '165px',
        width: '100%',
        borderRadius: '100%',
        resizeMode: 'stretch',
    },
    name: {
        fontSize:48,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:20
    },
    info: {
        backgroundColor: '#eee',
        borderRadius:10,
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:5
    },
    infoHead:{
        color:'lightgray',
        marginBottom:5,
    },
    infoFoot: {
        fontWeight:'bold',
        fontSize:20,
    }
});