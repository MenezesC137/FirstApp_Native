import React, { Component } from "react";

import { View, StyleSheet, Text, FlatList, Animated } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpAnimada: new Animated.Value(1),
    }

    Animated.parallel([

      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 200,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.OpAnimada,
        {
          toValue: 0,
          duration: 2000
        }
      ),
    ]).start()

    // Animated.timing(
    //   this.state.AltAnimada,
    //     {
    //       toValue: 300,
    //       duration: 2000
    //     }
    // ).start()

  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.LarAnimada,
            height: this.state.AltAnimada,
            opacity: this.state.OpAnimada,
            backgroundColor: "#4169E1",
            justifyContent: "center",
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
