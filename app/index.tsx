import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from'react-native-safe-area-context'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1' style={{ backgroundColor: '#192031', }}>
      <StatusBar style='light' />
      <View className=' h-full'>
        <View className='w-full px-4 items-center my-8'>

          <Animated.View 
          entering={FadeInDown.duration(200).springify()}
          className='flex-row justify-center items-center pb-24'>
            <MaterialCommunityIcons name='airplane' size={24} color='#12B3A8' />

            <Text className='text-white text-xl leading-[60px] pl-1'>Stacks</Text>
            <Text className='text-[#4AE8DD] text-xl leading-[60px] pl-1 italic'>FLY</Text>

          </Animated.View>

          <Animated.View
          entering={FadeInDown.duration(200).delay(200).springify()}
          >
            <Text className="text-[#FFFFFF] text-[52px] font-medium leading-[60px]"> 
            Discover your Dream Flight Easily </Text>
          </Animated.View>

          <View className='mt-6'>
            <Text className="text-neutral-300 text-lg font-medium leading-[38px]"> 
            find an easy way to buy airplane tickets with just a few clicks! </Text>
          </View>

          <View className='h-1/4 w-full justify-start pt-8 px-4'>
            <Pressable className='bg-[#12B3A8] p-4 rounded-xl justify-center items-center py-4'>
              <Text className='text-white font-bold text-lg'> Discover </Text>
            </Pressable>

            <View className='flex-row mt-6 w-full justify-center gap-2'>
              <Text className='text-white font-medium text-lg leading-[38px] text-center'>
                Don't have an account?
              </Text>
              <Text className='text-[#12B3A8] font-semibold text-lg leading-[38px] text-center'> Register </Text>
            </View>

          </View>

        </View>
      </View>
    </SafeAreaView>

  )
}

export default HomeScreen;