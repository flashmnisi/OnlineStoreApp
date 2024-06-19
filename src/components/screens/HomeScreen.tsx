import React, { useState } from 'react'
import { Text,View, ScrollView, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SliderBox } from 'react-native-image-slider-box'
//import { datarecent } from '../data/datarecent'
import { TabsStackScreenProps } from '../../navigators/TabsNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '../redux/store/productSlice'

 const CATEGORIES = [
  'ALL ITEMS',
  'BEDROOMS',
  'KITCHEN',
  'ELECTRIC',
 ]
const Corousel = () => {
      const slides = [
        require('../images/kitchap.jpeg'),
        require('../images/bfriday.jpg'),
        require('../images/bedap.jpeg'),
        require('../images/electap.jpeg'),  
      ]
    return (
      <View style={{ alignItems:'center',marginBottom:16 ,position:'absolute'}}>
        <SliderBox images={slides} 
        onCurrentImagePressed={(index: any) => console.warn(`image ${index} pressed`)}
        dotColor="#6495ed"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle = {{borderRadius:15, width: '95%' , marginTop: 15, borderWidth:1 ,borderColor:'#6495ed' }}
        autoplay
        circleLoop
        
        />
      </View>
     )
  }

export const HomeScreen = ({navigation}:TabsStackScreenProps<'Home'>) => {

  const dispatch = useDispatch();

  const datarecent = useSelector(state => state.products.products);
  const [categoryIndex, setCategoryIndex] = useState(0)
    return (
    
        <><SafeAreaView className='bg-pink-500'>

        <View className='pl-5 pr-5 bg-blue-300'>
          <View className='flex-row justify-between items-center'>
            <Entypo name='location' size={25} color={"#6495ed"} />
            <Text className='color-gray-500 font-semibold text-lg'>lillydale trust</Text>
            <View>

              <TouchableOpacity onPress={()=> {navigation.navigate('Cart')}}>
                <View className='bg-white h-4 w-4 justify-center items-center rounded-lg z-4'>
                  <Text>8</Text>
                </View>
                <Icons name='cart-variant' size={25} color={"#6495ed"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className='p-5'>
          <Text className='font-bold text-4xl color-emerald-800'>FURITURE SHOP</Text>
          <Text className='font-bold text-3xl color-cyan-200'>the best in the world</Text>
        </View>

        <View className='flex flex-row p-4 justify-between'>
          <TouchableOpacity className='border pl-4 h-12 w-72 justify-center rounded-3xl border-cyan-600'>
            <Icon name='search' size={25} color={"#6495ed"} />
          </TouchableOpacity>
          <TouchableOpacity className='border h-12 w-12 rounded-3xl justify-center items-center border-cyan-600 bg-slate-400'>
            <Icon name='sliders' size={25} color={"#6495ed"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
          <View style={{ flex: 1 }}>
            <Corousel />
          </View>
          <View style={{ marginTop: 250 }}>
            <FlatList
              data={CATEGORIES}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 16, gap: 12
              }}
              renderItem={({ item, index }) => {
                const isSelected = categoryIndex == index
                return (
                  <TouchableOpacity
                    onPress={() => setCategoryIndex(index)}
                    style={{
                      backgroundColor: isSelected ? '#90A4AE' : "#ffff",
                      paddingHorizontal: 24,
                      paddingVertical: 16,
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#90A4AE',
                    }}
                  >
                    <Text style={{
                      fontWeight: '600',
                      fontSize: 16,
                      opacity: isSelected ? 1 : 0.5
                    }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              } } />
               </View>


            <View className='mt-4'>
              <Text className='fond-bold text-[20px] pl-3'>
                Latest On Market
              </Text>

              <FlatList
                data={datarecent}
                numColumns={2}
                renderItem={({ item, index }) => (

                <TouchableOpacity className='flex-1' 
                      onPress={()=> 
                    
                      {
                        dispatch(productsSlice.actions.setSelectedProduct(item.id))
                        navigation.navigate('Details', {id: item.id})}}>
                     <View className='m-2 p-2 border rounded-lg border-slate-300 bg-blue-50'>
                       <Image source={item.image} 
                      style={{resizeMode:'contain'}}
                       className='w-full h-[130px]'
                       />
                  
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
                </TouchableOpacity>
                    ) }/>
               </View>
           </ScrollView></>
      
        
    )
  }