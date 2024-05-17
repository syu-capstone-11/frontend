import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Write = () => {
    return (
        <View style={style.container}>
          <Text style={style.write}>글쓰기{'\n'}</Text>
          <TextInput style={style.title} placeholder="제목"></TextInput>
          <View style={style.horizontalLine}></View>
          <TextInput style={style.content} multiline={true} placeholder="내용"></TextInput>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginTop: 25
    },
    write: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center'
    },
    title: {
        marginLeft: 17,
        marginTop: 10,
        fontSize: 25,
        textAlign: 'left'
    },
    horizontalLine: {
        width: '95%',
        height: 1,
        backgroundColor: 'lightgrey',
        marginLeft: 10,
        textAlign: 'center'
    },
    content: {
        marginTop: 30,
        marginLeft: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '95%',
        height: '50%',
        textAlignVertical: 'top',
        padding: 13
    }
})