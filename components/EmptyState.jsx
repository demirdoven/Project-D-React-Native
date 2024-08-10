import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={ images.empty } className="w-[270px] h-[210px]" resizeMode='contain' />
      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {subtitle}
      </Text>

      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({})