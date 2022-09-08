import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.img}
        />

        <Text style={styles.timer}> {this.state.num.toFixed(1)} </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>Vai</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -150,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  }
});

export default App;
