import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 80,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#4169E1",
          }}
        >
          <TouchableOpacity onPress={this.carregar}>
            <Text style={{fontSize: 25}}>
              Gerar grafico
            </Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={{
            width: this.state.LarAnimada,
            height: this.state.AltAnimada,
            backgroundColor: "#4169E1",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          <Text style={{ fontSize: 22, textAlign: "center" }}>Loading...</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
});
