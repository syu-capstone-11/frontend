import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Write = () => {
    const cancel = () => {
      // 취소 후 실행될 동작
    }
    const save = () => {
      // 저장 후 실행될 동작
    }
    return (
        <View style={style.container}>
          <Text style={style.write}>글쓰기{'\n'}</Text>
          <TextInput style={style.title} placeholder="제목"></TextInput>
          <View style={style.horizontalLine}></View>
          <TextInput style={style.content} multiline={true} placeholder="내용"></TextInput>
          <View style={style.buttonContainer}>
              <TouchableOpacity style={style.button} onPress={cancel}>
                  <Text>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.button} onPress={save}>
                  <Text>저장</Text>
              </TouchableOpacity>
          </View>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 30
    },
    button: {
        width: '48%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        fontSize: 25
    },

})