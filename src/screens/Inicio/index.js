import React, { Component } from 'react';
import { Platform, Text, View, TextInput, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import RenderItem from '../../components/RenderItem';
import Loading from '../../components/Loading';

class Inicio extends Component {

    state = {
        txtNome: "",
        loading: false,
        data: []
    }

    async buscar(nome){
        this.setState({loading: true});
        fetch(`https://swapi.co/api/people/?search=${nome}`).then((response) => {
             response.json().then((result) => { 
                this.setState({loading: false});
                this.setState({data: result});
             });
        }).catch(function(error){
            this.setState({loading: false});
            Alert.alert("Erro", "Erro na conexão.");
        });
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Loading visible={this.state.loading} />
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
                     onPress={() => this.props.navigation.navigate('Detalhe', {data: item} )}
                    />
                  )}
                />
            </View>
        );
    }
}

export default Inicio;