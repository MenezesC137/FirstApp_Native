import React, { Component } from "react";
import { Text, View, } from 'react-native'

class App extends Component{

  render(){    
    return(
        <View style={{flex:1, margin: 40, backgroundColor: 'blue'}}>
          <View style={{flex:1, backgroundColor: 'green'}}></View>
          <View style={{flex:1, backgroundColor: 'yellow'}}></View>
          <View style={{flex:2, backgroundColor: 'red'}}></View>
        </View>
    )
  }
}

export default App