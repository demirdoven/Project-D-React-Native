import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from "expo-router";
import { signIn } from '../../lib/appwrite'
import { Alert } from "react-native";
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {

  const {setUser, setIsLoggedIn} = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });


  const submit = async () => {

    if (form.email === "" || form.password === "") {
        Alert.alert("Error", "Please fill in all fields");
    }
  
    setSubmitting(true);

    try {
      
      const result = await signIn(form.email, form.password);

      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
      
    } catch (error) {
      // Alert.alert("Error", error.message);
      console.log(error)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 nt-psemibold">Login to ZED</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={ (e) => setForm( {...form, email: e} ) }
            otherStyles="mt-7"
            keyboardType="email-adress"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={ (e) => setForm( {...form, password: e} ) }
            otherStyles="mt-7"
            keyboardType="password"
          />

          <CustomButton 
            title="Sign In"
            handlePress={ submit }
            containerStyles="mt-7"
            isLoading={ isSubmitting }
          />

          <View
            className="justify-center pt-5 flex-row gap-2"
          >
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign  Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
