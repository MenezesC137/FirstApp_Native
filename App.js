import React, { Component } from "react";

import { View, StyleSheet, Text, FlatList, Animated } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
    }

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 200,
            duration: 2000
          }
        ),
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 150,
            duration: 2000
          }
        )
      ]) 
    ).start()

  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.LarAnimada,
            height: this.state.AltAnimada,
            backgroundColor: "#4169E1",
            justifyContent: "center",
            borderRadius: 25
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
    justifyContent: "center",
    alignItems: "center",
  },
});
