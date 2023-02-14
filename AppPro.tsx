import React from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    useColorScheme
} from "react-native"

export default function Apppro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
       
            <View style={style_.container}>
                <Text style={isDarkMode ? style_.whiteText :style_.blackText}>
                    Hello from AppPro.tsx
                </Text>
            </View>
       
    )
}

const style_ = StyleSheet.create({
    container:{
        flex :1,
        alignItems:'flex-start',
        fontSize:'100px'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    blackText:{
        color:'#000000'
    }
    
})