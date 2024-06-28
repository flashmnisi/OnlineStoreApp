
import React from 'react'
import { FlatList, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native'
import CartList from '../CartList'
import { useSelector } from 'react-redux'
import { selecteSubtotal, selectedDeliveryPrice, selectedTotal } from '../redux/store/cartSlice'

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = useSelector(selecteSubtotal);
    const deliveryFee = useSelector(selectedDeliveryPrice);
    const total = useSelector(selectedTotal)
   
    return(
        
      <><SafeAreaView className='bg-yellow-500'>

            <View className='bg-yellow-500'>
                <View className='p-5 justify-center items-center'>
                    <Text className='font-bold text-4xl color-emerald-800'>FURNITURE SHOP</Text>
                    <Text className='font-bold text-3xl color-cyan-200'>PAYMENT</Text>
                </View>
            </View>
        </SafeAreaView>
        <View className='mb-4 flex-[1]'>

                <FlatList
                    data={cartItems}
                    pagingEnabled
                    horizontal
                    snapToAlignment='center'
                    renderItem={({ item}) => <CartList CartItem = {item} /> 
                       
                    } />
                    <View className='h-2'>
                      
                    </View>
                     
                     <View className='h-[240] rounded-xl bg-yellow-500 bottom-0 ml-2 mr-2 p-3'>
       <Text className='font-bold text-xl text-red-600 mb-3'>Checkout Payments</Text>
       <View className='gap-3'>
        <View className='flex-row justify-between '>
         <Text className=' text-blue-700 font-semibold'>SUBTOTAL</Text>
         <Text className=' text-blue-700 font-semibold'>R {subtotal}</Text>
        </View>
        <View className='flex flex-row justify-between mb-8'>
                               <Text className='font-semibold' >DELIVERY</Text>
                               <Text className='font-semibold'>R {deliveryFee}</Text> 
                            </View>
        <View className='flex-row items-center justify-between mt-5'>
          <View className='flex-row justify-between gap-20'>
            <View>
                <Text className='opacity-70'>TOTAL PRICE</Text>
            <Text className='font-semibold text-3xl'>R {(total).toLocaleString()}</Text>
            </View>
            </View>
          <TouchableOpacity 
          className='bg-white h-[60] w-44 items-center flex-row relative rounded-3xl justify-center ml-7'>
            <Text className='font-semibold right-8'>
            CHECKOUT
            </Text>
            <View className='w-[45] h-[45] right-5 rounded-3xl bg-yellow-500 items-center justify-center absolute'>
            {/* <Text className=' text-white'>+</Text> */}
            <Image source={require('../images/cart1.png')} style={{resizeMode:'contain',
              height:25
            }}/>
            </View>
          </TouchableOpacity>
          
        </View>
       </View>
    </View>
                     
            </View></>
    )}
