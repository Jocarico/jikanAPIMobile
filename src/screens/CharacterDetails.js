import { StyleSheet, View, Text, Image } from "react-native"
import React from "react"

export default function CharacterDetails(props){
    const { character } = props.route.params;
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: character.image}}/>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Name: </Text>
                    <Text style={styles.property_value}>{character.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Name in kanji: </Text>
                    <Text style={styles.property_value}>{character.name_kanji}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>About: </Text>
                    <Text style={styles.property_value}>{character.about}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#001a66",
    },
    content:{
        flex:1,
        justifyContent:"flex-start",
        alignContent:"center",
        margin: 20,
        borderRadius:30,
        shadowColor:"gray",
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#3d5c5c",
        marginBottom:20,
    },
    image:{
        margin:10,
        marginTop:20,
        marginBottom:20,
        position:"relative",
        alignSelf:"center",
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: "gray",
        borderWidth:3,
    },
    property:{
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"center",
        margin:0,
        padding:0,
        marginBottom:5,
    },
    property_name:{
        fontSize: 14,
        alignSelf: "flex-start",
        color:"#003333",
        marginLeft:40,
    },
    property_value:{
        height:"100%",
        color:"#00b3b3",
        fontSize:14,
        alignSelf:"flex-start",
        marginLeft:60,
    },
});