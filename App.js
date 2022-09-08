import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Switch
} from "react-native";

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(value) => this.setState({status: value})}
        />

        <Text>
          {(this.state.status) ? "Ativo" : "Inativo"}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10
  },
})