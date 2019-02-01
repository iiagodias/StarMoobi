import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Inicio from './screens/Inicio';


const StackNavigator = createStackNavigator({
    Inicio: {
      screen: Inicio,
      navigationOptions:{
        header: null
      }
    }
});

const Route = createAppContainer(StackNavigator);

export default Route;