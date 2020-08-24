import React from 'react';
import {Text,View,StyleSheet, Button,Image,TextInput, TouchableOpacity}from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const LoginScreen=()=>{
return(
 <View>                                  
      <Image source={require('../../assets/school.png')}
      style={{alignSelf:"center",marginTop:20}}
      />

    <Text style={{alignContent:"center",justifyContent:"center",alignSelf:"center",fontSize:25,fontWeight:"bold"}} >
      Login To Your Account
    </Text>
    
    <View style={styles.viewstyle}>
    <AntDesign name="user" size={24} color="black" />
    <TextInput placeholder='username' style={styles.textinputstyle} />
    </View>
    
    <View style={styles.viewstyle}>
    <AntDesign name="lock" size={24} color="black" />
    <TextInput placeholder='password' style={styles.textinputstyle} />
    </View>

    <View style={styles.buttonstyle}>
      <Button title='Login' style={{color:'yellow'}} />
    </View>

    <TouchableOpacity>
      <Text 
      style={{alignSelf:"center",marginTop:15,textDecorationLine:"underline"}}>
          Forget password ?  
      </Text>
    </TouchableOpacity>
</View>
)
};

const styles=StyleSheet.create({
 viewstyle:{
    color:'red',
    flexDirection:'row', 
    alignItems:"center",
    borderWidth:1, 
    borderRadius:30,
    marginTop:20,
    paddingHorizontal:10,
    marginHorizontal:40
  },
  textinputstyle:{
    paddingHorizontal:20,
    padding:10,
  },
  buttonstyle:{
    backgroundColor:'#00716f',
    borderWidth:1,
    borderRadius:30,
    marginTop:20,
    paddingHorizontal:10,
    marginHorizontal:100
  }
});

export default LoginScreen;
