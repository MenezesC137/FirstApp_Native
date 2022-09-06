import React, { Component } from "react";
import { Text, View, } from 'react-native'

class App extends Component{

  render(){    
    return(
        <View style={{flex:1, marginTop: 50, flexDirection: 'row', justifyContent:'center'}}>
          <View style={{width: 50, height:50, backgroundColor: 'green'}}></View>
          <View style={{width: 50, height:50, backgroundColor: 'blue'}}></View>
          <View style={{width: 50, height:50, backgroundColor: 'red'}}></View>
        </View>
    )
  }
}

export default App