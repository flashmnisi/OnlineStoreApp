
import React, { useRef, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View ,Image,SafeAreaView, Animated } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import PagingComp from '../pagingComp'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../redux/store/cartSlice'
import ProductDescription from './ProductDescription'

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
    return(
        
      <><SafeAreaView className='bg-yellow-500 flex:1'>

            <View className='bg-yellow-500'>
                <View className='p-5 items-center'>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <View>
                           <Text className='font-bold text-4xl color-emerald-800'>FURITURE SHOP</Text> 
                        </View>
                        
                    </TouchableOpacity>
                    
                    <Text className='font-bold text-3xl color-cyan-200'>Your Product</Text>
                </View>
            </View>
        </SafeAreaView>
        <View className='mt-4'>
                <Text className='fond-bold text-3xl pl-3 color-red-600'>
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
                        <View className='border rounded-lg border-slate-300 bg-blue-50 w-[360px] ml-2'>
                            <Image source={item}
                                style={{resizeMode:'contain'}}
                                className='w-[330px] h-[200px] rounded-t-lg' 
                                />
                            <Text className='text-bold bg-emerald-200 p-1 px-3 text-[12px]'>{product.make}</Text>
                            <View className='flex-row justify-between mt-3'>
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
                    <ProductDescription Product={product} />
                      
            </View></>
    )}
