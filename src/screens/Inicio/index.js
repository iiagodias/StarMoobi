import React, { Component } from 'react';
import { Platform, Text, View, TextInput, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import RenderItem from '../../components/RenderItem';

class Inicio extends Component {

    state = {
        txtNome: "",
        data: []
    }

    async buscar(nome){
        fetch(`https://swapi.co/api/people/?search=${nome}`).then((response) => {
             response.json().then((result) => { 
                this.setState({data: result});
             });
        }).catch(function(error){
            Alert.alert("Erro", "Erro na conexão.");
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
                <FlatList
                  data={this.state.data.results}
                  keyExtractor={item => item.name}
                  renderItem={({ item }) => (
                    <RenderItem
                     name={item.name}
                    />
                  )}
                />
            </View>
        );
    }
}

export default Inicio;