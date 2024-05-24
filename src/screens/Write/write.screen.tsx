import React from "react";
import { Text, TextInput, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const Write = () => {
    return (
        <View style={style.container}>
          <Text style={style.board}>찾아주기</Text>
          <TextInput style={style.title} placeholder="제목"></TextInput>
          <View style={style.horizontalLine}></View>
          <TextInput style={style.content} multiline={true} placeholder="내용"></TextInput>
          <MapView style={style.map} initialRegion={{
            latitude: 37.64356956861168,
            longitude: 127.10636118766595,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}>
          </MapView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginTop: 0
    },
    board: {
        marginTop: 30,
        marginLeft: 8,
        fontSize: 17
    },
    title: {
        marginLeft: 7,
        marginTop: 15,
        fontSize: 20,
        textAlign: 'left'
    },
    horizontalLine: {
        width: '97%',
        height: 1,
        backgroundColor: 'black',
        marginLeft: 6,
        textAlign: 'center'
    },
    content: {
        marginTop: 10,
        fontSize: 17,
        width: '97%',
        height: '25%',
        textAlignVertical: 'top',
        padding: 13
    },
    map: {
        marginTop: 20,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '97%',
        height: '45%',
        textAlignVertical: 'top',
        padding: 13
    }
})
