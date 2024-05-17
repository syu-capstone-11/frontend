import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const FoundItBoard = () => {
    return (
        <View style={styles.container}>
            <Text>물건 찾아주기 게시판</Text>
            <TouchableOpacity>
                <Icon name="pluscircleo" size={45} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    plus: {
        position: 'absolute',
        bottom: 20, 
        right: 20
    }
});