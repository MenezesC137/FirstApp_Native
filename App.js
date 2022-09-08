import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  Button,
  Platform,
  Modal,
  Image
} from "react-native";

export default class App extends Component {

  constructor(props){

    super(props)

    this.state = {
      modal: false
    }

    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)


  }

  entrar(){
    this.setState({modal: true})
  }

  sair(){
    this.setState({modal: false})
  }

  render(){
    return (
      <View style={styles.container}> 
        <Button title='Entrar' onPress={ this.entrar } />

        <Modal animationType="slide" visible={this.state.modal}>
          <View >
            <Text style={{fontSize:30, marginLeft: 35, marginTop:20}}>BORAAAAA BILLLL!!!!</Text>
            <Image 
              style={{width: 350, height: 300, marginLeft: 27}}
              source={{uri: 'https://s2.glbimg.com/JLTqyzDpN1E9ArdIqmfy1c51Sd0=/0x0:1600x1162/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/4/i/FVTCuVTUWNhqc8V65g9Q/bora-bill-meme.jpg'}}
            />
            <View style={{marginTop: 50}}>
              <Button title={'Sair'} onPress={ this.sair } />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
})