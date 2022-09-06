import React, { Component } from "react";
import { Text, View, StyleSheet} from 'react-native'

class App extends Component{

  render(){    
    return(
        <View style={styles.area}>
          <Text>I am text 1</Text>
          <Text>I am text 2</Text>
          <Text>I am text 3</Text>
          <Text>I am text 4</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  area: {
    margin: 50
  }
})
export default App