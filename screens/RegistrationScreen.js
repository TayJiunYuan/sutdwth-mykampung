/*
Register by email
also offers continue with google
*/

import { View, Text, TextInput, StyleSheet , Button, TouchableOpacity, SafeAreaView} from "react-native";
import React, {useState, useEffect, useLayoutEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { auth, firebase, db } from '../firebase'
import '@firebase/firestore';
//import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import useAuth from "../hooks/useAuth";





const Registration = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, registerUser, loading, } = useAuth();
    const navigation = useNavigation();

    
    
    async function registration() {
        if (email === '' || password === '') {
            setError('Email and password are required');
            return;
        }
        try {
            registerUser(email, password)
   
        } catch (error) {
            setError(error.message);
        }
    }

    function toConfig(){
        console.log('hello');
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
           
            <Text className="absolute font-bold text-5xl left-10 top-40 leading-loose">
                Create {'\n'}Account
            </Text>

            {!!error && 
                <View 
                    className="absolute top-72 opacity-90 z-10 p-4 bg-[#D54826FF] rounded-2xl"
                >
                    <Text className="text-white">
                        {error}
                    </Text>
                </View>
            }
            
            <Text className="right-1/3 font-semibold">Your Email</Text>
            <TextInput 
                className="bg-[#D9D9D9] w-5/6 h-12 m-4 p-4 rounded-xl"
                placeholder="example@gmail.com"  
                value={email} 
                onChangeText={(email) => setEmail(email)} 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="email-address"
            />
            <Text className="right-1/3 font-semibold">Password</Text>
            <TextInput 
                className="bg-[#D9D9D9] w-5/6 h-12 m-4 p-4 rounded-xl"
                placeholder="password" 
                value={password} 
                onChangeText={(password) => setPassword(password)} 
                autoCapitalize="none" 
                autoCorrect={false} 
                secureTextEntry={true}
            />
            <View className="flex flex-col w-full items-center gap-2 absolute bottom-10">
                <TouchableOpacity
                    onPress={()=>{
                        registration();
                        
                    }}
                    className="bg-[#5b5b5b] w-5/6 p-4 rounded-2xl"
                >
                    <Text className="text-white text-center font-semibold">Create account</Text>
                </TouchableOpacity>
            
            </View>
        </SafeAreaView>
    )
}

export default Registration