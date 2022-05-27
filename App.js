/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Component, Button , StyleSheet ,Image ,TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from './Src/Dash';
import Details from './Src/Details';


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://res.cloudinary.com/samith/image/upload/v1653629210/dl.beatsnoop.com-1653629193_yxem8z.jpg',
        }}
      />
      <Text>Welcome to</Text>
      <Text style={styles.titleText}>Online Verce</Text>
      <View style={styles.regbtn}>
        <Button
          style={styles.btn}
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View style={styles.logbtn}>
        <Button title="Log In" onPress={() => navigation.navigate('LogIn')} />
      </View>
    </View>
  );
}



function Register({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={styles.topic}>Register</Text>
      <TextInput style={styles.input} placeholder="User Name" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Mobile Number" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Comfirm Password"
        secureTextEntry={true}
      />
      <View />
      <View style={styles.regbtn}>
        <Button
          style={styles.btn}
          title="Register"
          onPress={() => navigation.navigate('DashBoard')}
        />
      </View>
      

      <View style={styles.btn}>
      
      </View>
    </View>
  );
}



function LogScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
      <Text style={styles.topic}>Log In</Text>
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" />
      <View>
        <Text></Text>
      </View>

      <View style={styles.regbtn}>
        <Button
          style={styles.btn}
          title="LogIn"
          onPress={() => navigation.navigate('DashBoard')}
        />
      </View>
    </View>
  );
}





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome To Online Verce " component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LogIn" component={LogScreen} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  titleText: {
    fontSize: 55,
    color: 'black',
    fontWeight: 'bold',
  },
  regbtn: {
    width: 200,
    padding: 20,
  },
  logbtn: {
    width: 200,
    padding: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width:550,
    
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 300,
    margin: 15,
  },
  btn: {
    width: 180,
    marginTop: 20,
  },
  topic: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'black'
  },
});

export default App;
