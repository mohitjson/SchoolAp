import  React from 'react';
import { View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SignupScreenDetails from './screendetail/SignupScreenDetails';



function HomeScreen() {
  return (
    <View style={{flex:1,backgroundColor:'lightblue'}}>
      <LoginScreen />
      <SignupScreen />
    </View>
      
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="School" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreenDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
