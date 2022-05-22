import React, { useState } from "react";
import {Button, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal} from 'react-native'
import {GlobalStyle} from '../styles/style'
import { Ionicons } from '@expo/vector-icons'; 
import Form from "./form";

export default function Main({navigation}){


    const [news, setNews] = useState([
        {name: 'Apple', anons: 'Applleee', full:'APPLE FPR  ', key: '1', img: 'https://miro.medium.com/max/858/1*mFXp66exZkojqxvqxcbmwA.png'},
        {name: 'Apple', anons: 'Applleee', full:'APPLE FPR  ', key: '2', img: 'https://i.pinimg.com/originals/6f/00/21/6f00217e9d0b7f3cc3e5edc35819286c.jpg'},
        {name: 'Apple', anons: 'Applleee', full:'APPLE FPRdasdasdas  ',key: '3', img: 'https://www.ngv.vic.gov.au/guggenheim/education/images/EXHI003853_600.jpg'},
    ])

    const [modalWin, setModalWn] = useState(false)

    const addArticle = (article) =>{
        setNews((list)=> {
            article.key = Math.random().toString()
            return [
                article,
                ...list
            ]
        });
        setModalWn(false)
    }

    return(
        <View style={GlobalStyle.main}>
            <Modal visible={modalWin}>
                <View style={GlobalStyle.main} >
                    <Ionicons name="close-circle" size={24} color="black" style={styles.iconAD} onPress={()=> setModalWn(false)} />
                    <Text style={styles.title}>Form</Text>
                    <Form addArticle = {addArticle}/>
                </View>
            </Modal>
            <Ionicons name="add-circle" size={24} color="black" style={styles.iconAD} onPress={()=> setModalWn(true)}/>
            <Text style={[GlobalStyle.title, styles.header]}>Main Pcdas;j'nkjvcbdhjin;. age</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{
                        uri: item.img
                    }} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    iconAD:{
        textAlign: 'center',
        marginBottom: 15
    }
    ,
    image: {
        width: '100%',
        height: 200,
    },
    header: {
        marginBottom: 20,
    },
    item:{
        width: '100%',
        marginBottom: 20
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#293133'
    },
    anons:{
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#293133'
        
    }

})