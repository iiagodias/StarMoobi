import React, { Component } from 'react';
import { Platform, Text, View, TextInput, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import RenderItem from '../../components/RenderItem';
import { Tab, Tabs } from 'native-base';

class Detalhe extends Component {

    componentDidMount(){
        const data = this.props.navigation.getParam('data', []);
        console.log(data);

    }
    render(){
        return(
            <View style={styles.container}>
              <Tabs>
                <Tab heading="Tab1">
                    <View>
                        <Text>Teste</Text>
                    </View>
                </Tab>
                <Tab heading="Tab1">
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