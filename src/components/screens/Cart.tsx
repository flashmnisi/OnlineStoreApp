
import React, {useState } from 'react'
import { FlatList, Text, TouchableOpacity, View ,Image, ScrollView,SafeAreaView, Animated, useWindowDimensions} from 'react-native'
import { Button} from 'react-native-paper'
import CartList from '../CartList'
import { useSelector } from 'react-redux'
import { selecteSubtotal, selectedDeliveryPrice, selectedTotal } from '../redux/store/cartSlice'

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = useSelector(selecteSubtotal);
    const deliveryFee = useSelector(selectedDeliveryPrice);
    const total = useSelector(selectedTotal)
    const { width} = useWindowDimensions()
   
    return(
        
      <><SafeAreaView className='bg-yellow-500 '>

            <View className='bg-yellow-500'>
                <View className='p-5 justify-center items-center'>
                    <Text className='font-bold text-4xl color-emerald-800'>FURITURE SHOP</Text>
                    <Text className='font-bold text-3xl color-cyan-200'>PAYMENT</Text>
                </View>
            </View>
        </SafeAreaView>
        <ScrollView className='mt-4'>

                <FlatList
                    data={cartItems}
                    pagingEnabled
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item}) => <CartList CartItem = {item} /> 
                       
                    } />
                    <View className='h-16'>
                      
                    </View>
                     
                         <View className='mt-4 gap-3'>
                        <View className=' bg-emerald-700 h-[40px] justify-center mb-4'>
                            <Text className='fond-bold text-[20px] pl-3 text-fuchsia-50'>Description</Text>
                        </View>
                        <View className='gap-1 bg-gray-500 h-[140px] justify-center'>
                            <View className='flex flex-row justify-between'>
                                <Text className=' text-blue-700 font-semibold'>SUBTOTAL</Text>
                                <Text className=' text-blue-700 font-semibold'>{subtotal}</Text>
                            </View>
                            <View className='flex flex-row justify-between'>
                               <Text className=' text-red-700 font-semibold' >DELIVERY</Text>
                               <Text className='text-red-700 font-semibold'>{deliveryFee}</Text> 
                            </View>
                           <View className='flex flex-row justify-between'>
                             <Text className=' font-sans font-bold fill-orange-950'>TOTAL</Text>
                             <Text className=' text-blue-700 font-semibold'>{total}</Text>
                           </View>
                          
  
                        </View>
                        
                    </View>
                    <View className='mb-20'>
                        <TouchableOpacity onPress={() => console.warn('Pressed again')}>
                      <Button className='mt-9 h-[50] items-center ml-2 mr-2 justify-center rounded-lg' icon="camera" mode="contained-tonal" textColor='#6495ed' >
                       CHECKOUT
                       </Button>  
                    </TouchableOpacity> 
                    </View>
                    
                     
            </ScrollView></>
    )}
