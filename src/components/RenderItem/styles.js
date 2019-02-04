import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contain:{
        flexDirection: 'row',
        justifyContent: "center"
    },
    boxItem:{
        width: "80%",
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 3,
        marginTop: 15,
        flexDirection: "row"
    },
    textNome:{
        marginLeft: 10
    },
    bntFavorito:{
        marginLeft: 10,
        marginTop: 17
    }
});

export default styles;