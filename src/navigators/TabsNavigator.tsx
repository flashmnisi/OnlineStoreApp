import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../components/screens/HomeScreen'
import { Icon } from '@rneui/themed/dist/Icon'
import  AntDesign  from 'react-native-vector-icons/AntDesign'
import { ProductDetail } from '../components/screens/ProductDetail'
import { Details } from '../components/screens/Details'
import Profile from '../components/screens/Profile'
import { CompositeScreenProps } from '@react-navigation/native'
import { RootStackScreenProps } from './RootNavigator'
import { Cart } from '../components/screens/Cart'
import Login from '../components/screens/LoginDetails/Login'


export type TabsStackParamList = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;

};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps <T extends keyof TabsStackParamList> = 
CompositeScreenProps< BottomTabScreenProps<TabsStackParamList,T>,
RootStackScreenProps<'TabsStack'>
 >
const TabsNavigator = () => {
  return (
    <TabsStack.Navigator  screenOptions={{headerShown:false}}>
        <TabsStack.Screen 
        name='Home'
        component={HomeScreen}
        options={{
            tabBarIcon: ({focused,color,size})=> {
                return(
                  <AntDesign name='home'
                  size={25}
                  color={focused ? "#6495ed" : "#00ffff" }/>
                );
            }
        }}
        />
        <TabsStack.Screen 
        name='Cart' 
        component={Cart}
        options={{
            tabBarIcon: ({focused,color,size})=> {
                return(
                  <Icon name='shopping-cart'
                  color={focused ? "#6495ed" : "#00ffff" }/>
                );
            }
        }}
        />
        <TabsStack.Screen 
        name='Payment' 
        component={ProductDetail} 
        options={{
            tabBarIcon: ({focused,color,size})=> {
                return(
                  <Icon name='wallet'
                  color={focused ? "#6495ed" : "#00ffff" }/>
                );
            }
        }}
        />
        <TabsStack.Screen 
        name='Profile' 
        component={Login}
        options={{
            tabBarIcon: ({focused,color,size})=> {
                return(
                  <Icon name='person'
                  size={focused?40:30}
                  color={focused ? "#6495ed" : "#00ffff"
                 }/>
                );
            }
        }}
        />
    </TabsStack.Navigator>
  );
}

export default TabsNavigator
