import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Inicio from './screens/Inicio';
import { createStackNavigator, createAppContainer  } from 'react-navigation';

const StackNivagator = createStackNavigator({
    Inicio: {
      screen: Inicio,
      navigationOptions:{
        header: null
      }
    }
});

const Route = createAppContainer(StackNivagator);

export default Route;