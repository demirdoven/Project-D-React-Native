import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={ images.empty } className="w-[270px] h-[210px]" resizeMode='contain' />
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({})