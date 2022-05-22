import React from "react";
import {Button, StyleSheet, Text, View, Image, TextInput} from 'react-native'
import {GlobalStyle} from '../styles/style'
import {Formik} from 'formik'

export default function Form ({ addArticle }){
    return(
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: '' }} onSubmit={(values, action)=>{
                addArticle(values);
                action.resetForm
            }}>
                {(props)=>(
                    <View>
                        <TextInput 
                        style={styles.input}
                        value={props.values.name} 
                        placeholder='Put the cokkie down' 
                        onChangeText={props.handleChange('name')}
                        />
                        <TextInput 
                        style={styles.input}
                        value={props.values.anons} multiline
                        placeholder='Put the anons down' 
                        onChangeText={props.handleChange('anons')}
                        />
                        <TextInput 
                        style={styles.input}
                        value={props.values.full} multiline
                        placeholder='Put the full down' 
                        onChangeText={props.handleChange('full')}
                        />
                        <TextInput 
                        style={styles.input}
                        value={props.values.img} 
                        placeholder='Put the img down' 
                        onChangeText={props.handleChange('img')}
                        />
                        <View style={styles.but}>
                           <Button title="Add" onPress={props.handleSubmit}/> 
                        </View>
                        
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderRadius: 15,
        borderWidth: 1,
        padding: 15,
        borderColor: 'silver',
        marginTop: 15
    },
    but:{
        marginTop: 15,
    }
})