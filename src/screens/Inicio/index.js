import React, { Component } from 'react';
import { Platform, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

class Inicio extends Component {

    state = {
        txtNome: ""
    }

    async buscar(nome){
        await fetch(`https://swapi.co/api/people/?search=${nome}`).then(function(response){
             response.text().then(function(result){ 
               result = JSON.parse(result);
               if(result.count === 0){
                   alert("Erro", "Nenhum personagem encontrado!");
               }else{
                   alert(JSON.stringify(result.results));
               }
             });
        }).catch(function(error){
            
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.boxInput}>
                        <Icon name="search" size={18} color="#999" />
                        <TextInput 
                         placeholder="Buscar"
                         returnKeyType="search"
                         style={styles.inputBuscar}
                         onChangeText={(txtNome) => this.setState({txtNome})}
                         value={this.state.txtNome}
                         onSubmitEditing={() => this.buscar(this.state.txtNome)} />
                    </View>
                </View>
            </View>
        );
    }
}

export default Inicio;