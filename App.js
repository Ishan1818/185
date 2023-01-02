import React from 'react';
import Main from "./screens/Main";
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/CreateStackNavigator'
import Home from "./screens/Home";
import Main from "./screens/Main";

const stack= CreateStackNavigator
function App()
{
  return(
    <NavigationContainer>
      <Stack.navigator initialRouteName="Home" screenOptions={{
        headerShown:false

      }}>
        <stack.screen name="home" component={Home}/>
        <stack.screen name="Main" component={Main}/>
      </Stack.navigator>
    </NavigationContainer>

)}
;
export default function App() {
  return (
    <Main />
  )
}