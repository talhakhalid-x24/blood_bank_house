import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity,TextInput } from 'react-native';
import Firebase from '../config/firebase';

class Contact extends React.Component{
    constructor() {
        super();
        this.state = {
            name : "", 
            location: "", 
            blood: "",
            number:"", 
            message: "",
            nameErr: "",
            numberErr: "",
            locationErr: "",
            bloodErr: "",
            messageErr: "",
        };
    }
    
    onPressButton(name,location,blood,number,message) {
        Firebase.database().ref('contact/').push({
            name,
            location,
            blood,
            number,
            message
        }).then((data)=>{
            console.log('data =>', data)
        }).catch((error)=> {
            console.log('error =>', error)
        })
        let rjx = /^[a-zA-Z]+$/;
        let isValid = rjx.test(this.state.name);
        if(this.state.name ==""){
            this.setState({nameErr:"Name field is required"})
        }
        else if(!isValid){
            this.setState({nameErr:"Name field always in alphabetic"})
            console.warn("ye to chal rhi hy")
        }
        else{
            this.setState({nameErr:""})
        }
        if(this.state.location ==""){
            this.setState({locationErr:"Location field is required"})
        }
        else{
            this.setState({locationErr:""})
        }
        if(this.state.blood ==""){
            this.setState({bloodErr:"Blood field is required"})
        }
        else{
            this.setState({bloodErr:""})
        }
        if(this.state.number ==""){
            this.setState({numberErr:"Number field is required"})
        }
        else{
            this.setState({numberErr:""})
        }
        if(this.state.message ==""){
            this.setState({messageErr:"Message field is required"})
        }
        else{
            this.setState({messageErr:""})
            this.props.navigation.navigate('ThanksYou')
        }
    }
    render(){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.registerText}>Add Your Request</Text>
            </View>
            <View style={styles.registerForm}>
                <Text>Enter Your Message</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Name'}
                        onChangeText={text => {this.setState({name:text})}}
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.nameErr}</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Address'}
                        onChangeText={text => {this.setState({location:text})}}
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.locationErr}</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Blood Group'}
                        onChangeText={text => {this.setState({blood:text})}}
                        maxLength="3"
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.bloodErr}</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Phone No.'}
                        onChangeText={text => {this.setState({number:text})}}
                        minLength="11"
                        maxLength="13"
                        keyboardType="numeric"
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.numberErr}</Text>
                <View style={styles.textAreaContainer} >
                    <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Your Message"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={text => {this.setState({message:text})}}
                    minLength="25"
                    maxLength="200"
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.messageErr}</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.onPressButton(
                        this.state.name,
                        this.state.location,
                        this.state.blood,                        
                        this.state.number,
                        this.state.message
                    )}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }
}

export default Contact;


const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
    },
    registerText : {
        fontSize : 24,
        textAlign : 'center', 
        marginTop: 20,
        marginBottom: 20
    },
    registerForm : {
        borderColor : '#c9c9c9',
        borderWidth: 1,
        borderStyle : 'solid',
        width: '90%',
        padding: 20,
    },
    registerInput : {
        height: 40, 
        borderColor: 'gray', 
        borderBottomWidth: 1,
        color:'gray',
        outlineColor: 'none',
        outlineStyle: 'none',
        outlineWidth: 'none'
    },
    textAreaContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginTop:5
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start",
        color:'gray',
        outlineColor: 'none',
        outlineStyle: 'none',
        outlineWidth: 'none'
      },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
    //   borderRadius: 50,
    //   top:'1%'
        marginTop:30,
        marginBottom:0,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      paddingVertical: 10,
      paddingHorizontal: 48
    }
});