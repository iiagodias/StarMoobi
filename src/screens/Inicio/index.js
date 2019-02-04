import React, { Component } from 'react';
import { Platform, Text, View, TextInput, Alert, FlatList, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import RenderItem from '../../components/RenderItem';
import Loading from '../../components/Loading';

class Inicio extends Component {

    state = {
        txtNome: "",
        loading: false,
        data: [],
        dataFavorito: []
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

    async getFavorito(){
       await AsyncStorage.getItem('@StarMoobi:fav').then((data) =>{
            this.setState({dataFavorito: JSON.parse(data)});
       }).catch((error)=>{  
            Alert.alert("Erro", "Erro na conexão.");
       });

    }

    async favoritar(item){

        AsyncStorage.getItem('@StarMoobi:fav').then((data) =>{
            data = (data ? JSON.parse(data) : []);
            if(data.length > 0){
                const verifica = data.filter(obj => obj.name == item.name);
                if(verifica.length > 0){
                    Alert.alert("Aviso", "Você já favoritou esse personagem");
                }else{
                    data.push(item);
                    AsyncStorage.setItem('@StarMoobi:fav', JSON.stringify(data));
                }
            }else{
                data.push(item);
                AsyncStorage.setItem('@StarMoobi:fav', JSON.stringify(data));
            }
            this.getFavorito();
        }).catch((error)=>{  
                Alert.alert("Erro", "Erro na conexão.");
        });  

    }

    async removerFav(item){
        const lista = this.state.dataFavorito.filter(obj => obj.name !== item.name);
        await AsyncStorage.setItem('@StarMoobi:fav', JSON.stringify(lista));
        this.setState({dataFavorito: lista});
    }


    async componentDidMount(){
        this.getFavorito();
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Loading visible={this.state.loading} />
                <View style={styles.header}>
                    <View style={styles.boxInput}>
                        <Icon name="search" size={18} color="#999" />
                        <TextInput 
                         placeholder="Search"
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
                     onFavorito={() => this.favoritar(item)}
                    />
                  )}
                />
                <View style={styles.boxFavorito}>
                    <View style={styles.boxTitulo}><Text>Favorite Characters</Text></View>
                    <View></View>
                    <ScrollView horizontal={true}>

                        {this.state.dataFavorito.map((item) =>
                           <View style={styles.boxFavDados} key={item.name}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.boxPerson}  onPress={() => this.props.navigation.navigate('Detalhe', {data: item} )}>
                                <View style={styles.boxDadosFav}>
                                    <Icon name="user-astronaut" size={20} color="#2980b9" />
                                    <Text ellipsizeMode="tail" style={styles.txtNameFav}>{item.name}</Text>  
                                </View>                         
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bntDelete} onPress={() => this.removerFav(item)}>
                                    <View style={styles.bntExcluir}><Text style={styles.txtRemover}>Remover</Text></View>
                                </TouchableOpacity>
                           </View>
                        )}
                        

                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Inicio;