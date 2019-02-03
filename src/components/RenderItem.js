import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Inicio extends Component {
     render(){
        return(
            <View style={styles.contain}>
              <TouchableOpacity style={styles.boxItem} activeOpacity={0.5} onPress={() => this.props.onPress}>
                <Icon name="user" size={18} color="#999" />
                <Text style={styles.textNome}>{this.props.name}</Text>
              </TouchableOpacity>
            </View>
            
        );
     }

}

const styles = StyleSheet.create({
    contain:{
        alignItems: 'center',
    },
    boxItem:{
        width: "90%",
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 3,
        marginTop: 10,
        flexDirection: "row"
    },
    textNome:{
        marginLeft: 10
    }
});