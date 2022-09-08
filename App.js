import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Calabresa', valor: 35.99},
        {key: 2, nome: 'Frango com catupiry', valor: 36.99},
        {key: 3, nome: '4 Queijos', valor: 30.99},
        {key: 4, nome: 'Tomate Seco', valor: 355.99},

      ]
    }
  }

  render(){

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})
        }>
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu: Pizza {this.state.pizzas[this.state.pizza].nome} </Text>
        <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor}</Text>
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
  logo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  }
})