import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {

  const {isLoading, isLoggedIn, user} = useGlobalContext();

  console.log('isLoggedIn: ', isLoggedIn)
  console.log('user: ', user)

  return (
    <SafeAreaView>
      <FlatList 
        data={[{id: 1}, {id: 2}, {id: 3}]}
        keyExtractor={ (item)=>item.$id }
        renderItem={ ({item})=>(
          <Text className="text-3xl bg-slate-400 mb-4">{item.id}</Text>
        ) }
      />
    </SafeAreaView>
  )
}

export default Home
