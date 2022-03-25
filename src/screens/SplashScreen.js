import React, { useEffect } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const image_url =
"https://i.pinimg.com/originals/3c/a9/9a/3ca99aa52168e8680908bb4da67fcd11.jpg"

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