import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.header}>
                    <Image
                        source={require('../../image/logo.png')}
                        style={styles.logo}
                    />
                    <Image
                        source={require('../../image/send.png')}
                        style={styles.send}
                    />
                </TouchableOpacity>
               
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