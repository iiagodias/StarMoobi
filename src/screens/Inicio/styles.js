import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#828282',
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
  },
  boxFavorito:{
    padding: 10,
    backgroundColor: "#34495e"
  },
  boxTitulo:{
    alignItems: "center"
  },
  boxPerson:{
    height: 90,
    width: 90,
    backgroundColor: "#fff",
    borderRadius: 3,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  txtNameFav:{
    fontSize: 13
  },
  bntExcluir:{
    width: "100%",
    height:20,
    backgroundColor: "#c0392b",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  boxDadosFav:{
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  bntDelete:{
    width: "100%"
  },
  boxFavDados:{
    width: 90,
    margin: 5,
    alignItems: "center"
  },
  txtRemover:{
    fontSize: 10
  }

});


export default styles;