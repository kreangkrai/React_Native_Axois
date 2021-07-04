import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import News from './Screen/News';
import { View,Button,Alert} from 'react-native';
import newAPI from './apis/News';

async function insertData(){
  await newAPI.post('insert',{device:"Sensor16",value:"29.89"})
  .then(async function(response){
       //console.log(response.data.InsertedID)
       await Alert.alert(response.data.InsertedID)
  })
  .catch(function(error){
      console.log(error)
  })
}
function InsertScreen({Navigation}){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button title="Insert" onPress={()=> insertData()}></Button>
    </View>
  );
}

async function updateData(){
  await newAPI.put('update',{device:"Sensor14",value:"0"})
  .then(async function(response){
       //console.log(response.data)
       await Alert.alert(response.data.UpsertedCount)
  })
  .catch(function(error){
      console.log(error)
  })
}
function UpdateScreen({Navigation}){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button color='#342123' title="Update" onPress={()=> updateData()}></Button>
    </View>
  );
}

async function DeleteData(device){
  await newAPI.delete(`delete/${device}` )
  .then(async function(response){
      //console.log(response)
      //await Alert.alert(response)
 })
 .catch(function(error){
     console.log(error)
 })
}

function DeleteScreen({Navigation}){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button title="Delete" onPress={()=> DeleteData("Sensor11")}></Button>
    </View>
  );
}


const Drawer = createDrawerNavigator();


export default function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="News">
    <Drawer.Screen name="News" component={News}/>
    <Drawer.Screen name='Insert' component={InsertScreen}/>
    <Drawer.Screen name="Update" component={UpdateScreen}/>
    <Drawer.Screen name="Delete" component={DeleteScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const stackNavigator = createStackNavigator({
//   News: News
// })

// const App = createAppContainer(stackNavigator)
// export default App