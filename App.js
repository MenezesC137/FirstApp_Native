import React, { Component } from "react";
import { SafeAreaView, Text, View, Image } from 'react-native'

class App extends Component{
  render(){

    let nome = 'Francesco VIRGOLINIII'
    let img = 'https://static.wikia.nocookie.net/carros/images/3/33/Francesco-bernoulli.png/revision/latest?cb=20200207014243&path-prefix=pt-br'
    return(
      <SafeAreaView>
        <View style={{ margin:20 }}>
          <Text>Hello familia!</Text>
          <Text>Hello familia!</Text>
          <Text>Hello familia!</Text>
          <Text>Hello familia!</Text>
          <Text style={{ color: 'red', fontSize: 25}}>
            {nome}, a maquina mas veloz de toti italia!!!
          </Text>

          <Image 
            source={{uri: img}}
            style={{width: 350, height: 300}}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default App