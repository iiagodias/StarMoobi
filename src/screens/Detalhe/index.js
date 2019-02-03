import React, { Component } from 'react';
import { Platform, Text, View, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import RenderItem from '../../components/RenderItem';
import { Tab, Tabs } from 'native-base';
import ItemTab from '../../components/ItemTabs';
import ModalDetalhes from '../../components/ModalDetalhes';

class Detalhe extends Component {

    state ={
        data: [],
        homeworld: "",
        films: [],
        vehicles: [],
        starships: [],
        visibleModal: false,
        item: [],
        tipo: ""

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

    async buscarVehicles(){
        await this.state.data.vehicles.forEach(item => {
            fetch(item).then((response) =>{
                response.json().then((result) =>{
                    this.setState({vehicles: [...this.state.vehicles, result]});
                });
            }).catch((erro)=>{
                Alert.alert("Erro", "Erro na conexão.");
            });

        });
  
    }

    async buscarStarships(){
        await this.state.data.starships.forEach(item => {
            fetch(item).then((response) =>{
                response.json().then((result) =>{
                    this.setState({starships: [...this.state.starships, result]});
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
        this.buscarVehicles();     
        this.buscarStarships();
        
    }

    modalDetalhes(visible, item, tipo){
        this.setState({visibleModal: visible, item: item, tipo: tipo});
    }

    fecharModal(){
        this.setState({visibleModal: false});
    }

    render(){
        return(
            <View style={styles.container}>
              <ModalDetalhes visible={this.state.visibleModal} item={this.state.item} onClose={() => this.fecharModal()} tipo={this.state.tipo}  />
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

                    <View style={styles.corpoTab}>
                        <ScrollView contentContainerStyle={styles.scrollTab}>
                            {this.state.films.map((item) =>
                                <ItemTab name={item.title} onPress={() => this.modalDetalhes(true, item, "Films")} key={item.title} icon="film" />
                            )}
                        </ScrollView>
                    </View>

                </Tab>
                <Tab heading="Vehicles" tabStyle={styles.tab} activeTabStyle={styles.tabActive}>

                    <View style={styles.corpoTab}>
                        <ScrollView contentContainerStyle={styles.scrollTab}>
                            {this.state.vehicles.map((item) =>
                                <ItemTab name={item.name} onPress={() => this.modalDetalhes(true, item, "Vehicles")} key={item.name} icon="car" />
                            )}
                        </ScrollView>
                    </View>

                </Tab>
                <Tab heading="Starships" tabStyle={styles.tab} activeTabStyle={styles.tabActive}>

                    <View style={styles.corpoTab}>
                        <ScrollView contentContainerStyle={styles.scrollTab}>
                            {this.state.starships.map((item) =>
                                <ItemTab name={item.name} onPress={() => this.modalDetalhes(true, item, "Starships")} key={item.name} icon="space-shuttle" />
                            )}
                        </ScrollView>
                    </View>

                </Tab>
              </Tabs>

            </View>
        );
    }
}

export default Detalhe;