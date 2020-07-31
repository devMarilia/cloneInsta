import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';

class Lista extends Component{
  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    }
  }

  render(){
    return(
      <View style={styles.areaFeed}>

         <View style={styles.viewPerfil}>
           <Image
            source={{uri: this.state.feed.imgperfil}}
            style={styles.fotoPerfil}
           />

           <Text style={styles.nomeUsuario}>
              {this.state.feed.nome}
           </Text>
          </View>
           
          <Image
          resizeMode="cover"
          source={{uri: this.state.feed.imgPublicacao}}
          style={styles.fotoPublicacao}
          />

          <View style={styles.areabtn}>
            <TouchableOpacity style={styles.btnSend}>
              <Image
                source={require('../../image/like.png')}
                style={styles.like}
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                source={require('../../image/send.png')}
                style={styles.like}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewRodape}>
            <Text style={styles.nomeRodape}>
              {this.state.feed.nome}
            </Text>
            <Text style={styles.descRodape}>
              {this.state.feed.descricao}
            </Text>
          </View>
         
      </View>
    )
  }
}


const styles = StyleSheet.create({
  areaFeed: {

  },
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8
  },
  nomeUsuario:{
    fontSize: 18,
    textAlign: "left", 
    color: "#000000"
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  fotoPublicacao: {
    flex: 1,
    height: 400
  },
  areabtn: {
    flexDirection: "row",
    padding: 5
  },
  like: {
    width: 33,
    height: 33
  },
  btnSend: {
    paddingLeft: 5
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center"
  },
  nomeRodape: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#000",
  paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000"
  }
})

export default Lista