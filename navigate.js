import React from "react";
import Main from "./companents/main";
import FullInfo from "./companents/FullInfo";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Main',
                    headerStyle: {backgroundColor: '#9966CC', height: 60},
                    headerTitleStyle: {fontWeight: 'light'},
                }}
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{title: 'State'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}