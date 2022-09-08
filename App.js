import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";

export default class App extends Component {

  constructor(props){

    super(props)

    this.state = {
      input: '',
      nome: ''
    }

    this.gravarNome = this.gravarNome.bind(this)

  }

  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome: value})
    })
  }

  async componentDidUpdate(_, prevState){
    const nome = this.state.nome
    if(prevState !== nome ){
      await AsyncStorage.setItem('nome', nome)
    }
  }

  gravarNome(){
    
    this.setState({
      nome: this.state.input
    })

    alert('Salvo com sucesso!')
    Keyboard.dismiss();

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={(text)=> this.setState({input: text})}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity onPress={this.gravarNome}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
          
        </View>

        <Text style={styles.nome}> {this.state.nome} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width:350,
    height:40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 1
  },
  btn:{
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
})