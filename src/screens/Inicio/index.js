import React, { Component } from 'react';
import { Platform, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

class Inicio extends Component {

    state = {
        txtNome: ""
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.boxInput}>
                        <Icon name="search" size={18} color="#999" />
                        <TextInput placeholder="Buscar" style={styles.inputBuscar} />
                    </View>
                </View>
            </View>
        );
    }
}

export default Inicio;