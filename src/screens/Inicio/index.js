import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator, Modal, ScrollView, Image, FlatList } from 'react-native';
import styles from './styles';

class Inicio extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Inicio</Text>
            </View>
        );
    }
}

export default Inicio;