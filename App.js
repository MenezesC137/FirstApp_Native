import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";

import Slider from "@react-native-community/slider";

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      valor: 0
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(selected) => this.setState({valor: selected})}
          value={this.state.valor}
        
        />
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          { this.state.valor.toFixed(0) }
        </Text>
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
})