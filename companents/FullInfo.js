import React from "react";
import {Button, StyleSheet, Text, View, Image} from 'react-native'
import {GlobalStyle} from '../styles/style'

export default function Contacts({route}){
    // const loadScene = () =>{
    //     navigation.goBack()
    // }
    
    return(
        <View style={GlobalStyle.main}>
            <Image style={styles.image} source={{
                        uri: route.params.img
            }} />
            <Text style={[GlobalStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.anons}>{route.params.full}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    anons:{
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#293133'
        
    },
    header: {
        fontSize: 25,
        marginTop: 25
    },
    image: {
        width: '100%',
        height: 200,
    },

})
