import React, { useEffect } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const image_url =
"https://i.pinimg.com/originals/b7/80/8c/b7808c2b04d91336ae2f5b62223d8b76.jpg"

export default function SplashScreen({ navigation }){
    useEffect(() => {
        setTimeout(() =>{
            navigation.replace("Characters");
        }, 5000)
    });
    return (
        <SafeAreaView style={styles.image_container}>
            <Image source={{uri: image_url}} style={styles.image}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image_container:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    image:{
        width: "100%",
        height:"100%",
    }
})