import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { cartSlice } from './redux/store/cartSlice'

const CartList = ({CartItem}:any) => {

  const dispatch = useDispatch();
  
  const addCount = () => {
    dispatch(
      cartSlice.actions.changeCount({
        productId: CartItem.product.id,
        amount: 1,
      })
    )
  };
  const minusCount = () => {
    dispatch(
      cartSlice.actions.changeCount({
        productId: CartItem.product.id,
        amount: -1,
      })
    )
  };

  return (
    <View className='flex-[1]'>
      <View className='m-2 px-2 border rounded-lg border-slate-300 bg-blue-50'>
                             <Image source={CartItem.product.image}
                                 style={{resizeMode:'contain'}}
                                 className='w-[330px] h-[150px] rounded-t-lg' 
                                 />
                             <Text className='text-bold bg-emerald-200 text-red-500 p-1 px-3 text-[12px]'>{CartItem.product.make}</Text>
                             <View className='flex-row  bg-emerald-200 mt-0'>
                              <Text className='text-bold px-3 text-[12px]'>model {CartItem.product.model}</Text>
                              <Text className='text-bold text-[12px]'>, size {CartItem.product.size}</Text>
                             </View>
                             
                             <View className='flex-row justify-between mt-3'>
                                 
                                 <TouchableOpacity>
                                     <Icons name='cards-heart-outline' size={25} color={"#6495ed"} />
                                 </TouchableOpacity>
                             </View>
                         </View>

                         <View className='flex-row items-center gap-2 mr-3'>
                          <View>
                           <Text className='text-3xl text-cyan-600 ml-3'>ZAR {CartItem.product.price * CartItem.count}</Text>
                          </View>
                        <View className='flex-1'></View>
                      <View className='flex-row bg-cyan-500 mt-4 items-center p-1 rounded-[50px]'>
                       <TouchableOpacity className='bg-white w-[44px] h-[44px]  rounded-3xl items-center justify-center'
                       onPress = {minusCount}
                       >
                         <Icon name='remove' size={25}/>
                       </TouchableOpacity>
                       <Text className='font-bold text-lg color-white m-1'>{CartItem.count}</Text>
                       <TouchableOpacity className='bg-white w-[44px] h-[44px]  rounded-3xl items-center justify-center'
                       onPress={addCount}>
                         <Icon name='add' size={25}/>
                       </TouchableOpacity>
                      </View>

                     
                    </View> 
    </View>
  )
}

export default CartList