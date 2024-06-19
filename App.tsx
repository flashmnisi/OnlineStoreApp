/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/// <reference types="nativewind/types" />
import React from 'react';
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
export default function App () {

    return (
      <View className='flex-1' >

       
        <NavigationContainer>
          <RootNavigator/>
          <StatusBar barStyle={'dark-content'}/>
        </NavigationContainer>
        
      </View>
    )
  }



