/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';


import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/rootNavigation';
// import  SignInScreen  from './src/screens/authScreens/SignInScreen'
// import RootNavigation from './src/navigation/rootNavigation';




export default function App ()
{
    return (
        <View style = {styles.container}>
            <StatusBar
            barStyle = "light-content"
            backgroundColor = {colors.statusBar}
            />
          
          
             <RootNavigator/>
 
          

        </View>
    )
}

const styles = StyleSheet.create ({
container: {flex:1}


})