import React, { Component } from 'react';
import { Platform, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import RenderItem from '../../components/RenderItem';
import { Tab, Tabs } from 'native-base';

class Detalhe extends Component {

    state ={
        data: [],
        homeworld: "",
        films: []
    }

    async buscarFilms(){
        await this.state.data.films.forEach(item => {
            fetch(item).then((response) =>{
                response.json().then((result) =>{
                    this.setState({films: [...this.state.films, result]});
                });
            }).catch((erro)=>{
                Alert.alert("Erro", "Erro na conexão.");
            });

        });

        
    }

    async componentDidMount(){
        const data = this.props.navigation.getParam('data', []);
        this.setState({data});
        await fetch(data.homeworld).then((response) =>{
            response.json().then((result) => {
                this.setState({homeworld: result.name});
            });
        }).catch((error) =>{
            Alert.alert("Erro", "Erro na conexão.");
        });

        this.buscarFilms();        
    }

    render(){
        return(
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.boxTitulo}>
                    <Icon name="user-astronaut" size={18} color="#999" /><Text style={styles.titulo}>Name: {this.state.data.name}</Text>
                </View>

                <View style={styles.boxTitulo}>
                    <Icon name="arrows-alt-v" size={18} color="#999" /><Text style={styles.titulo}>Height: {this.state.data.height}</Text>
                </View>

                <View style={styles.boxTitulo}>
                    <Icon name="balance-scale" size={18} color="#999" /><Text style={styles.titulo}>Mass: {this.state.data.mass}</Text>
                </View>

                <View style={styles.boxTitulo}>
                    <Icon name="keybase" size={18} color="#999" /><Text style={styles.titulo}>Hair color: {this.state.data.hair_color}</Text>
                </View>

                <View style={styles.boxTitulo}>
                    <Icon name="paint-brush" size={18} color="#999" /><Text style={styles.titulo}>Skin color: {this.state.data.skin_color}</Text>
                </View>

                <View style={styles.boxTitulo}>
                    <Icon name="eye" size={18} color="#999" /><Text style={styles.titulo}>Eye color: {this.state.data.eye_color}</Text>
                </View>

                <View style={styles.boxTitulo}>
                    <Icon name="birthday-cake" size={18} color="#999" /><Text style={styles.titulo}>Birth year: {this.state.data.birth_year}</Text>
                </View>

                <View style={styles.boxTitulo}>
                     <Icon name="mars" size={18} color="#999" /><Text style={styles.titulo}>Gender: {this.state.data.gender}</Text>
                </View>

                <View style={styles.boxTitulo}>
                     <Icon name="globe-americas" size={18} color="#999" /><Text style={styles.titulo}>Home world: {this.state.homeworld}</Text>
                </View>
              </View>

              <Tabs>
                <Tab heading="Films" tabStyle={styles.tab} activeTabStyle={styles.tabActive}>
                    <View>

                    </View>
                </Tab>
                <Tab heading="Vehicles" tabStyle={styles.tab} activeTabStyle={styles.tabActive}>
                    <View>
                        <Text>Teste</Text>
                    </View>
                </Tab>
                <Tab heading="Starships" tabStyle={styles.tab} activeTabStyle={styles.tabActive}>
                    <View>
                        <Text>Teste</Text>
                    </View>
                </Tab>
              </Tabs>

            </View>
        );
    }
}

export default Detalhe;