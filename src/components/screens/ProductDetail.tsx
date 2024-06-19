
import React, { Component, useRef, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View ,Image, ScrollView,SafeAreaView, Animated, useWindowDimensions} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import PagingComp from '../pagingComp'
import { Button} from 'react-native-paper'
import { DProductDetail } from '../data/ProductDetail'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { useSelector } from 'react-redux'
import { datarecent } from '../data/datarecent'

export const ProductDetail = ({navigation,route:{params:{id}}}:RootStackScreenProps<'Details'>) => {
   console.log('id',{id})
   
   
   const datarecent = useSelector((state) => state.products.selectedProduct)
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    
    const handleOnScroll = (event: any) => {
         Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    },
                },
            },
         ],
         {
            useNativeDriver:false,
         }
        )(event);
    };
    const handleOnViewableChanged = useRef(({viewableItems}:any) => {
      setIndex(viewableItems[0].index);
    }).current

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold:50,
    }).current

    const product = datarecent
    console.log(product.id)
    const [count, setCount] = useState(1)
    const { width} = useWindowDimensions()
   
    return(
        
      <><SafeAreaView className='bg-yellow-500 '>

            <View className='bg-yellow-500'>
                <View className='p-5'>
                    <Text className='font-bold text-4xl color-emerald-800'>FURITURE SHOP</Text>
                    <Text className='font-bold text-3xl color-cyan-200'>GET Your Best Product</Text>
                </View>
            </View>
        </SafeAreaView>
        <ScrollView className='mt-4'>
                <Text className='fond-bold text-[20px] pl-3'>
                    {product.name}
                </Text>

                <FlatList
                    data={product.images}
                    horizontal 
                    pagingEnabled
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleOnScroll}
                    onViewableItemsChanged={handleOnViewableChanged}
                    viewabilityConfig={viewabilityConfig}
                    renderItem={({ item, index}) => (
                        <View className='m-2 px-2 border rounded-lg border-slate-300 bg-blue-50'>
                            <Image source={item}
                                style={{resizeMode:'contain'}}
                                className='w-[330px] h-[200px] rounded-t-lg' 
                                />
                            <Text className='text-bold bg-emerald-200 p-1 px-3 text-[12px]'>{product.category}</Text>
                            <View className='flex-row justify-between mt-3'>
                                <View>
                                    <Text className='text-[14] font-semibold'>{product.price}</Text>
                                    <Text className='text-[14] font-semibold'>{product.size}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Icons name='cards-heart-outline' size={25} color={"#6495ed"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )} />
                    <View className='h-16'>
                       <PagingComp
                        //@ts-ignore
                        data={product.images} scrollX={scrollX} index={index}/> 
                    </View>
                    
                    <View className='mt-4 gap-3'>
                        <View className=' bg-emerald-700 h-[40px] justify-center mb-4'>
                            <Text className='fond-bold text-[20px] pl-3 text-fuchsia-50'>Description</Text>
                        </View>
                        <View className='gap-1 bg-gray-500 h-[140px] justify-center'>
                           <Text className=' text-blue-700 font-semibold'>MAKE </Text>
                           <Text className=' text-red-700 font-semibold' >MODEL : 2024</Text>
                           <Text className='text-red-700 font-semibold'>SIZE : LARGE</Text>
                           <Text className=' font-sans font-bold fill-orange-950'>PRICE : R 4500 </Text>
 
                        </View>
                        
                    </View>
                    <View className='mb-20'>
                        <TouchableOpacity onPress={() => console.log('Pressed again')}>
                      <Button className='mt-9 h-[50] items-center ml-2 mr-2 justify-center rounded-lg' icon="camera" mode="contained-tonal" textColor='#6495ed' >
                       Add TO Cart
                       </Button>  
                    </TouchableOpacity> 
                    </View>
                    
                     
            </ScrollView></>
    )}
