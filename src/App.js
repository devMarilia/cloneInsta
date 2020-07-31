import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import Lista from '../src/pages/Lista'
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
     };
 
  }


    render() {
        return (
            <View style={styles.container}>
              <View>
                <TouchableOpacity style={styles.header}>
                    <Image
                        source={require('./image/logo.png')}
                        style={styles.logo}
                    />
                    <Image
                        source={require('./image/send.png')}
                        style={styles.send}
                    />
                </TouchableOpacity>

                <FlatList
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.feed}
                  renderItem={ ({item}) => <Lista data={item} /> }
                />
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    header: {
        height: 55,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 7,

        shadowColor: "#000",
        elevation: 1
    },
    send: {
        height: 23,
        width: 23
    }
})

export default Header 