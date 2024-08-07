import { Text, View } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider';

const Home = () => {

  const {isLoading, isLoggedIn, user} = useGlobalContext();

  console.log('isLoggedIn: ', isLoggedIn)
  console.log('user: ', user)

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
