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
import { Provider } from 'react-redux';
import { store } from './src/components/redux/store';
export default function App () {

    return (
      <Provider store = {store}>
         <View className='flex-1' >
        <NavigationContainer>
          <RootNavigator/>
          <StatusBar barStyle={'dark-content'}/>
        </NavigationContainer>
        
      </View>
      </Provider>
      
    )
  }



