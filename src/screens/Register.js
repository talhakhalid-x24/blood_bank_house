'use strict';

import React from 'react';
import { StyleSheet, Text, View , Picker, TouchableOpacity,TextInput } from 'react-native';
import Firebase from '../config/firebase';
import ValidationComponent from 'react-native-form-validator';

class Register extends React.Component{
    constructor() {
        super();
        this.state = {
            name : "", 
            email: "", 
            number:"", 
            location: "", 
            age: "",
            gender: "",
            blood: "",
            nameErr: "",
            emailErr: "",
            numberErr: "",
            locationErr: "",
            ageErr: "",
            genderErr: "",
            bloodErr: "",
        };
    }
    onPressButton(name,location,blood,age,gender,email,number) {
        Firebase.database().ref('register/').push({
            name,
            location,
            blood,
            age,
            gender,
            email,
            number
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
            // console.warn("ye to chal rhi hy")
        }
        else{
            this.setState({nameErr:""})
        } 
        if(this.state.location ==""){
            this.setState({locationErr:"Location field is required"})
        }
        else {
            this.setState({locationErr:""})
        }
        if(this.state.blood ==""){
            this.setState({bloodErr:"Blood field is required"})
        }
        else {
            this.setState({bloodErr:""})
        }
        if(this.state.age ==""){
            this.setState({ageErr:"Age field is required"})
        }
        else {
            this.setState({ageErr:""})

        }
        if(this.state.gender ==""){
            this.setState({genderErr:"Gender field is required"})
        }
        else {
            this.setState({genderErr:""})

        }
        if(this.state.email ==""){
            this.setState({emailErr:"Email field is required"})
        }
        else {
            this.setState({emailErr:""})
        }
        if(this.state.number ==""){
            this.setState({numberErr:"Number field is required"})
        }
        else{
            this.setState({numberErr:""})
            this.props.navigation.navigate('ThanksYou')
        }
    }


    render(){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.registerText}>Register You BloodGroup</Text>
            </View>
            <View style={styles.registerForm}>
                <Text>Enter Your Details</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Name'}
                        onChangeText={text => {this.setState({name:text})}}
                        minLength="3"
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
                        placeholder={'Enter Your Age'}
                        minLength="2"
                        maxLength="3"
                        keyboardType="numeric"
                        onChangeText={text => {this.setState({age:text})}}
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.ageErr}</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Gender'}
                        onChangeText={text => {this.setState({gender:text})}}
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.genderErr}</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Email'}
                        onChangeText={text => {this.setState({email:text})}}
                        // onBlur={()=>this.emailValidate()}
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.emailErr}</Text>
                <View>
                    <TextInput
                        style={styles.registerInput}
                        placeholder={'Enter Your Phone No.'}
                        keyboardType="numeric"
                        maxLength={13}
                        onChangeText={text => {this.setState({number:text})}}
                        minLength={11}
                    />
                </View>
                <Text style={{color:'red'}}>{this.state.numberErr}</Text>
               <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=> {this.onPressButton(
                        this.state.name,
                        this.state.location,
                        this.state.blood,
                        this.state.age,
                        this.state.gender,
                        this.state.email,                        
                        this.state.number,
                    )}}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }
}

export default Register;

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
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