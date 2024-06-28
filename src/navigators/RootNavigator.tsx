import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native'
import TabsNavigator, { TabsStackParamList } from './TabsNavigator'
import { Details } from '../components/screens/Details'
import { ProductDetail } from '../components/screens/ProductDetail'
 
export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList> ;
    Details: {id: number};
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackScreenProps<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList,T>;
const RootNavigator =() => {
  
    return (
   <RootStack.Navigator  screenOptions={{headerShown:false}}>  
        <><RootStack.Screen
    name='TabsStack'
    component={TabsNavigator}
    options={{ headerShown: false }} /><RootStack.Screen name='Details' component={ProductDetail} /></>
      </RootStack.Navigator>
    )
  }


export default RootNavigator
