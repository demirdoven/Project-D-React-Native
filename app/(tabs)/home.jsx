import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {

  const {isLoading, isLoggedIn, user} = useGlobalContext();

  console.log('isLoggedIn: ', isLoggedIn)
  console.log('user: ', user)

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList 
        data={[{id: 1}, {id: 2}, {id: 3}]}
        // data={[]}
        keyExtractor={ (item)=>item.$id }
        renderItem={ ({item})=>(
          <Text className="text-3xl text-white ">{item.id}</Text>
        ) }
        ListHeaderComponent={ ()=>(
            <View className="y-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-gray-100">Welcome back</Text>
                  <Text className="text-2xl font-psemibold text-white">Selocan</Text>
                </View>

                <View className="mt-1.5 ">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>

              <SearchInput />

              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-lg font-pregular text-gray-100 mb-3">
                  Latest Videos 
                </Text>

                <Trending posts={ [ {id:1}, {id:2}, {id:3}] ?? [] } />

              </View>

            </View>
        )}
        ListEmptyComponent={ ()=>(
          <EmptyState 
            title="No videos found"
            subtitle="Be the first one to upload a video"
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Home
