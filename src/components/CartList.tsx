import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'

const CartList = ({CartItem}:any) => {
  const [count, setCount] = useState(1)
  return (
    <View>
      <View className='m-2 px-2 border rounded-lg border-slate-300 bg-blue-50'>
                             <Image source={CartItem.product.image}
                                 style={{resizeMode:'contain'}}
                                 className='w-[330px] h-[200px] rounded-t-lg' 
                                 />
                             <Text className='text-bold bg-emerald-200 p-1 px-3 text-[12px]'>{CartItem.product.price}</Text>
                             <View className='flex-row justify-between mt-3'>
                                 <View>
                                     <Text className='text-[14] font-semibold'>{CartItem.product.name}</Text>
                                 </View>
                                 <TouchableOpacity>
                                     <Icons name='cards-heart-outline' size={25} color={"#6495ed"} />
                                 </TouchableOpacity>
                             </View>
                         </View>

                         <View className='flex-row items-center gap-2 mr-3'>
                        <View><Text className='text-lg text-cyan-600'>PRICE {CartItem.product.price}</Text></View>
                        <View className='flex-1'></View>
                      <View className='flex-row bg-cyan-500 mt-4 items-center p-1 rounded-[50px]'>
                       <TouchableOpacity className='bg-white w-[44px] h-10  rounded-3xl items-center justify-center'
                       onPress={() => setCount((count) => Math.max(1,count - 1))}
                       >
                         <Icon name='remove' size={25}/>
                       </TouchableOpacity>
                       <Text className='font-bold text-lg color-white m-1'>{count}</Text>
                       <TouchableOpacity className='bg-white w-[44px] h-10  rounded-3xl items-center justify-center'
                       onPress={() => setCount((count) => count + 1)}>
                         <Icon name='add' size={25}/>
                       </TouchableOpacity>
                      </View>

                     
                    </View> 
    </View>
  )
}

export default CartList
