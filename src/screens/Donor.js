import React from 'react';
import { StyleSheet, Text, View ,TextInput,ImageBackground,TouchableOpacity } from 'react-native';
import circle from '../../assets/images/circle.png';
import Firebase from '../config/firebase';


class Donor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            register : null
        }
    }
    componentDidMount() {
        console.log('mounted')
        Firebase.database().ref('register').on('value' ,(snapshot) =>{
            console.log(snapshot.toJSON());
            const register = [];
            snapshot.forEach( doc => {
                // register.push(doc)
                var key = doc.key;
                var name = snapshot.child(key + '/name').val();
                var blood = snapshot.child(key + '/blood').val();
                var location = snapshot.child(key + '/location').val();
                var number = snapshot.child(key + '/number').val();
                var age = snapshot.child(key + '/age').val();
                register.push({ _name: name, _key: key, _blood:blood,_location:location,_number:number,_age:age});
            })
            this.setState({register:register})
            console.log(this.state.register)
    })
    }
    render(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainHeading}>Select Blood Donors</Text>
            </View>
            <View>
                <TextInput placeholder={'Find Your Blood Group'} style={styles.searchBlood} />
            </View>
            <View>
                <Text style={styles.recentText}>Recent Blood Registers</Text>
                <View style={styles.allBlood}>
                            {
                                this.state.register &&
                                this.state.register.map( (register,i) => {
                                    return(
                                        <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => this.props.navigation.navigate('Profile',{
                                            name: register._name,
                                            location: register._location,
                                            number:register._number,
                                            blood:register._blood,
                                            age:register._age,
                                        })}>
                                            <View style={styles.bloodGroup}>
                                                <View style={{width:'25%'}}>
                                                    <ImageBackground style={styles.circle} source={circle}>
                                                    <Text style={styles.bloodText}>{register._blood}</Text>
                                                    </ImageBackground>
                                                </View>
                                                <View style={styles.bloodMember}>
                                                    <Text style={styles.member}>{register._name}</Text>
                                                    <Text style={styles.location}>{register._location}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }   
                </View>
            </View>
        </View>
    );
    }
}

export default Donor;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'90%',
      marginVertical:10,
      marginHorizontal: 'auto'
    },
    mainHeading: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight:'bold',
    },
    searchBlood: {
        borderBottomWidth: 1,
        paddingBottom: 5,
        outlineColor: 'none',
        outlineStyle: 'none',
        outlineWidth: 'none'
    },
    recentText: {
        fontWeight:'bold',
        fontSize:18,
        marginVertical: 20,
    },
    bloodGroup: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    circle: {
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '70px'
        // alignItems: 'center',
    },
    bloodText: {
        fontSize:29,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff',
        width:'100%',
    },
    bloodMember: {
        marginVertical: 'auto',
        marginHorizontal: 15,
    },
    member : {
        fontWeight:'bold',
        fontSize:20
    },
    location : {
        color:'gray'
    }
});