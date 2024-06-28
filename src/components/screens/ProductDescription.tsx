import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { cartSlice } from '../redux/store/cartSlice';
const ProductDescription= ({Product}:any)=> {
    const product = Product
const dispatch = useDispatch();
const addToCart = () => {
 dispatch(cartSlice.actions.addCartItem({product}))

}

  return (
    <View className='h-[240] rounded-xl bg-yellow-500 bottom-0 ml-2 mr-2 p-3'>
       <Text className='font-bold text-xl text-red-600'>{product.make}</Text>
       <View>
        <View>
         <Text className='flex font-semibold text-base'>Model {product.model} , Size {product.size}</Text>
         <Text className='font-semibold text-lg'>Description</Text>   
         <Text className='text-sm opacity-75'>{product.description}</Text>
        </View>
        <View className='flex-row items-center justify-between mt-5'>
          <View className='flex'>
            <Text className='opacity-70'>PRICE</Text>
            <Text className='f font-semibold'>R {(product.price).toLocaleString()}</Text>
          </View>
          <TouchableOpacity 
          onPress={addToCart}
          className='bg-white h-[60] w-44 items-center flex-row relative rounded-3xl justify-center'>
            <Text className='font-semibold right-8'>
                Add To Cart
            </Text>
            <View className='w-[45] h-[45] right-5 rounded-3xl bg-yellow-500 items-center justify-center absolute'>
            <Image source={require('../images/cart1.png')} style={{resizeMode:'contain',
              height:25,
            }}/>
            </View>
          </TouchableOpacity>
        </View>
       </View>
    </View>
  )
}

export default ProductDescription

