import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native';
import homelogo from '../../assets/images/homelogo.png';
import blood from '../../assets/images/blood.png';
import find from '../../assets/images/find.png';
import donor from '../../assets/images/donor.png';
import register from '../../assets/images/register.png';

function Home({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={homelogo} style={styles.logo} />
                <Text style={styles.headerText}>Bloodhouse</Text>
            </View>
            <View style={styles.main}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>SERVICES WE PROVIDE</Text>
                <View style={styles.mainServie}>
                    <TouchableOpacity style={styles.services} activeOpacity={0.8} onPress={() => navigation.navigate('Donor')}>
                        <View style={styles.serviceItem}>
                            <Image style={styles.serviceImage} source={find} />
                            <Text style={styles.serviceText}>Find Blood Group</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.services} activeOpacity={0.8} onPress={() => navigation.navigate('Register')}>
                        <View style={styles.serviceItem}>
                            <Image style={styles.serviceImage} source={register} />
                            <Text style={styles.serviceText}>Register Blood Group</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.services,{marginHorizontal:'auto'}} activeOpacity={0.8} onPress={() => navigation.navigate('Contact')}>
                        <View style={styles.serviceItem}>
                            <Image style={styles.serviceImage} source={blood} />
                            <Text style={styles.serviceText}>Add Blood Request</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Text> Karachi, Sindh, Pakistan </Text>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    header : {
        flex:2,
        width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#e96950',
        paddingBottom:20,
        paddingTop:20
    },
    logo:{
        width: "25%",
        resizeMode: 'stretch',
        height: 120,
    },
    headerText : {
        color:'#fff',
        fontSize:20
    },
    main : {
        flex : 4,
        // paddingTop : 20,
        // paddingBottom : 20,
        alignItems: 'center',
        justifyContent:'center',
    },
    mainServie : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        flexWrap : 'wrap'
    },
    services : {
        width:'50%',
    }, 
    serviceItem : {
        width: '100%',
        alignItems: 'center',
        marginTop : 50,
    },
    serviceImage : {
        width: '20%',
        height: 40,
        resizeMode: 'stretch',
    },
    serviceText : {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    footer : {
        flex:1,
        width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#e96950'
    }
});