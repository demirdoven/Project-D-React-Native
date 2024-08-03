import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">gttt oooooo</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue', }} >Go go go</Link>
    </View>
  )
}

export default RootLayout
