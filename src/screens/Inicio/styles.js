import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#ffff',
      flex: 1,
  },
  header:{
    height: 70,
    backgroundColor: "#34495e",
    borderBottomWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    paddingHorizontal: 5
  },
  boxInput:{
    backgroundColor: "#ffff",
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderRadius: 2,
  },
  inputBuscar:{
    fontSize: 15,
    marginLeft: 5,
    padding: 0,
    width: "90%",
    color: "#4F4F4F"
  }

});


export default styles;