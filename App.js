import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from 'react-native'

class App extends Component{

  constructor(props){

    super(props)

    this.state = {
      nome: 'Carlos'
    }

    this.entrar = this.entrar.bind(this)

  }

  entrar(nome){
    this.setState({
      nome
    })
  }

  render(){    
    return(
      <SafeAreaView style={{ margin:20 }}>
        <View style={{ margin:20 }}>

          <Button title='Entrar' onPress={() => this.entrar('Matheus')}/>
          <Text style={{color: 'yellow', fontSize: 50, textAlign: 'center'}}>{this.state.nome}</Text>
        </View>
      </SafeAreaView>
    )
  }
}
export default App