import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.img}
        />

        <Text style={styles.timer}>0.0</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity styles={styles.btn}>
            <Text>Vai</Text>
          </TouchableOpacity>
          <TouchableOpacity styles={styles.btn}>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
});

export default App;
