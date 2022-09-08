import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from "react-native";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      feed:[
        {id: '1', nome: 'Carlos', idade: 50, email: 'Carlos@gmail.com'},
        {id: '2', nome: 'João', idade: 50, email: 'João@gmail.com'},
        {id: '3', nome: 'eduardo', idade: 50, email: 'eduardo@gmail.com'},
        {id: '4', nome: 'menezes', idade: 50, email: 'menezes@gmail.com'},
        {id: '5', nome: 'santos', idade: 50, email: 'santos@gmail.com'},
      ]
    }
  }

  render() {
    return (
    <View style={styles.container}>
     
      <FlatList 
        data={this.state.feed}
        renderItem={ ({item}) => <Pessoa data={item} />}
      />

    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  areaPesosa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }

});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPesosa}>
        <Text style={styles.textoPessoa}> Name: { this.props.data.nome } </Text>
        <Text style={styles.textoPessoa}> Age:  { this.props.data.idade } </Text>
        <Text style={styles.textoPessoa}> Email: { this.props.data.email } </Text>

      </View>
    )
  }
}