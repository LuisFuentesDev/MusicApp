import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { ApiScreen } from '../screens/ApiScreen';
import { AboutScreen } from '../screens/AboutScreen';

export type StackParamNavigator = {
    HomeScreen: undefined;
    ApiScreen: undefined;
    AboutScreen: undefined;
}

const Stack = createStackNavigator<StackParamNavigator>();

export const NavigatorApp = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ApiScreen" component={ApiScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />

        </Stack.Navigator>
    );
}
