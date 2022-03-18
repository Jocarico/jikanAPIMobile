import { View, Text } from "react-native"
import React from "react"
import Character from "../components/Character";

export default function CHaracterDetails(props){
    const { Character } = props.route.params;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: Character.image}}/>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Name: </Text>
                    <Text style={styles.property_value}>{Character.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Status: </Text>
                    <Text style={styles.property_value}>{Character.status}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Species: </Text>
                    <Text style={styles.property_value}>{Character.species}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Type: </Text>
                    <Text style={styles.property_value}>{Character.type || "NA"}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Gender: </Text>
                    <Text style={styles.property_value}>{Character.gender}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Origin: </Text>
                    <Text style={styles.property_value}>{Character.origin.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Location: </Text>
                    <Text style={styles.property_value}>{Character.location.name}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#24282f",
    },
    content: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        margin: 20,
        borderRadius: 30,
        shadowColor: "gray",
        shadowOffset: {
            widht: 0,
            height: 5,
        },
        shadoOpacity:0.25,
        shadowRadius:3.84,
        elevation: 5,
        backgroundColor: "#3c3e44",
        marginBottom: 20,
    },
    image:{
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
        position:"relative",
        alignSelf:"center",
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor:"gray",
        borderWidth: 3,
    },
    property:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        margin:0,
        padding:0,
        marginottom: 5,
    },
    property_name:{
        fontSize:16,
        alignSelf:"flex-start",
        color: "#8a8b8c",
        marginLeft: 40,
    },
    property_value:{
        widht:"100%",
        color: "#ECECEC",
        fontSize:14,
        alignSelf:"flex-start",
        marginBottom: 60,

    }
});