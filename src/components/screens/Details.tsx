
import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View ,Image, ScrollView,SafeAreaView} from 'react-native'
import Data2 from '../Data2'
import { Data } from '../screens/Ddata'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { StatusBar } from 'react-native'

export const Details = () => {
    return(
        
      <><SafeAreaView className='bg-yellow-500 '>

            <View className='bg-yellow-500'>
                <View className='p-5'>
                    <Text className='font-bold text-4xl color-emerald-800'>FURITURE SHOP</Text>
                    <Text className='font-bold text-3xl color-cyan-200'>GET Your Best Product</Text>
                </View>
                <View className='p-4'>
                    <TouchableOpacity className='border pl-4 h-12 w-full bg-white justify-center rounded-3xl border-cyan-600'>
                        <Icons name='search' size={25} color={"#6495ed"} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        <ScrollView className='mt-4'>
                <Text className='fond-bold text-[20px] pl-3'>
                    Latest On Market
                </Text>

                <FlatList
                    data={Data}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <View className='flex-1 m-2 p-2 border rounded-lg border-slate-300 bg-blue-50'>
                            <Image source={item.image}
                                className='w-full h-[150px] rounded-t-lg' />
                            <Text className='text-bold bg-emerald-200 p-1 px-3 text-[12px]'>{item.category}</Text>
                            <View className='flex-row justify-between mt-3'>
                                <View>
                                    <Text className='text-[14] font-semibold'>{item.name}</Text>
                                    <Text className='text-[20] font-bold color-cyan-700'>R {item.price}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Icons name='cards-heart-outline' size={25} color={"#6495ed"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )} />

            </ScrollView></>
    )}
