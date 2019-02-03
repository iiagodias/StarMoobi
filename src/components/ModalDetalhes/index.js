import React, { Component } from 'react';
import { Platform, Text, View, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ModalDetalhes extends Component {
     render(){
        return(
              <Modal visible={this.props.visible} onRequestClose = {() => {}} transparent>
                <View style={styles.contain}>
                  <View style={styles.boxModal}>  
                     
                     {this.props.tipo === 'Films' &&

                      <View>
                        <Text>Title: {this.props.item.title}</Text>
                        <Text>Episode: {this.props.item.episode_id}</Text>
                        <Text>Director: {this.props.item.director}</Text>
                        <Text>Producer: {this.props.item.producer}</Text>
                        <Text>Release date: {this.props.item.release_date}</Text>
                      </View>

                     }

                     {this.props.tipo === 'Vehicles' &&

                      <View>
                        <Text>Name: {this.props.item.name}</Text>
                        <Text>Model: {this.props.item.model}</Text>
                        <Text>Manufacturer: {this.props.item.manufacturer}</Text>
                        <Text>Cost in credits: {this.props.item.cost_in_credits}</Text>
                        <Text>Length: {this.props.item.length}</Text>
                        <Text>Max atmosphering speed: {this.props.item.length}</Text>
                        <Text>Crew: {this.props.item.crew}</Text>
                        <Text>Passengers: {this.props.item.passengers}</Text>
                        <Text>Consumables: {this.props.item.consumables}</Text>
                        <Text>Vehicle class: {this.props.item.vehicle_class}</Text>
                      </View>

                     }

                     {this.props.tipo === 'Starships' &&

                      <View>
                        <Text>Name: {this.props.item.name}</Text>
                        <Text>Model: {this.props.item.model}</Text>
                        <Text>Manufacturer: {this.props.item.manufacturer}</Text>
                        <Text>Cost in credits: {this.props.item.cost_in_credits}</Text>
                        <Text>Length: {this.props.item.length}</Text>
                        <Text>Max atmosphering speed: {this.props.item.length}</Text>
                        <Text>Crew: {this.props.item.crew}</Text>
                        <Text>Passengers: {this.props.item.passengers}</Text>
                        <Text>Consumables: {this.props.item.consumables}</Text>
                        <Text>Hyperdrive rating: {this.props.item.hyperdrive_rating}</Text>
                        <Text>MGLT: {this.props.item.MGLT}</Text>
                        <Text>Starship_class: {this.props.item.starship_class}</Text>
                      </View>

                     }



                     <TouchableOpacity style={styles.bntFechar} onPress={this.props.onClose}>
                        <Text>Fechar</Text>
                     </TouchableOpacity>
                  </View>
                </View>
              </Modal>
        );
     }

}
