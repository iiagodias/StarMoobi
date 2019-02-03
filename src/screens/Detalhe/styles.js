import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#828282',
      flex: 1,
  },
  header:{
    backgroundColor: "#34495e",
    padding: 10,
  },
  tab:{
    backgroundColor: "#34495e"
  },
  tabActive:{
    backgroundColor: "#2c3e50"
  },
  titulo:{
    color: "#fff",
    marginLeft: 10
  },
  boxTitulo:{
    flexDirection: "row"
  },
  corpoTab:{
    flex: 1,
    backgroundColor: "#4444",
  },
  scrollTab:{
    alignItems: "center"
  }
});


export default styles;