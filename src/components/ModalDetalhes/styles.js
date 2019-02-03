import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contain:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center"
    },
    boxModal:{
        backgroundColor: '#ffff',
        width: "80%",
        padding: 10,
        borderRadius: 3
    },
    bntFechar:{
        backgroundColor: "#e74c3c",
        borderRadius: 3,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        padding: 3
    }
});

export default styles;