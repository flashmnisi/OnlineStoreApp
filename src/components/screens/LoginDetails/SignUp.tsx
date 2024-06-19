import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TextInput as MaterialTextInput ,Button} from 'react-native-paper'

export const SignUp = () => {
    return (
            <><SafeAreaView className=' bg-slate-500'>
                <View className='bg-slate-500'>
                    <View className='p-5 items-center'>
                        <Text className='font-bold text-4xl color-emerald-800'>WELCOME</Text>
                        <Text className='font-bold text-3xl color-cyan-200'>Register to Login</Text>
                    </View>
                </View>
    
    
    
            </SafeAreaView>
            <View>
    <View className='mt-16 ml-3 mr-3'>
                    <MaterialTextInput className='mt-5' placeholder='Name'/>
                    <MaterialTextInput className='mt-5' placeholder='Phone Number'/>
                    <MaterialTextInput className='mt-5' placeholder='Email'/>
                    <MaterialTextInput className='mt-5' placeholder='Password' secureTextEntry/>
                    <Button className='mt-9 h-[50] items-center justify-center rounded-lg' icon="camera" mode="contained-tonal" textColor='#6495ed' onPress={() => console.log('Pressed')} >
                     Sign Up
                     </Button>
                     <View className='items-center mt-2'>
                         <Text>Already have an accound login here</Text> 
                     </View>
            </View>
            
                   
                </View></>
    
        )
      }
    

export default SignUp
