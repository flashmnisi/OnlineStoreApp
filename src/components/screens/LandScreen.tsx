import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import GetLocation, { Location } from 'react-native-get-location'
import { API_KEY } from '../../../utility'


export const LandScreen = () => {

  const [userLocation,setuserLocation] = useState(null) 
  // @ts-ignore
  const [address,setAddress] = useState<Location.Address>() 
  
  console.log(userLocation)


 
useEffect(() => {

  const getLocation = async () => {
GetLocation.getCurrentPosition({
    enableHighAccuracy: false,
    timeout: 60000,
})
.then(async location => {
  setuserLocation({
    // @ts-ignore
  latitude: location.latitude,
  longitude: location.longitude
  });
  const data:any = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${API_KEY}`)
  console.log(data)
})

.catch(error => {
    const { code, message } = error;
    console.warn(code, message);
});
  }
  

getLocation()
},[])
  

// @ts-ignore
    return (
      <View className="flex-[1] bg-white ">
        <View className='flex-[2]  '>

        </View>
        <View className='flex-[9] bg-yellow-600 items-center justify-center'>
          <Image source={require('../images/deliverlogo.jpg')} className='rounded-2xl h-20 w-20' />
          <View className=' border-red-500 border-b-2 p-2 my-2.5'>
            <Text className='font-bold file:text-sm font-sans'>
              Your devivery Adress
            </Text>
          </View>
          <Text className='text-slate-300'>setUserAdress</Text>
        </View>
        <View className='flex-[1] '>
          <Text>footer</Text>
        </View>
        </View>
      
    )
    }
  