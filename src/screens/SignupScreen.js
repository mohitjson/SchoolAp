import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const SignupScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Signup')}
                style={{ marginTop: 40, alignSelf: "center" }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textDecorationLine: 'underline'
                }}>Signup for new account
            </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SignupScreen;