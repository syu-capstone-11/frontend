import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Write } from '../Write';

export const LostItemBoard = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleIconPress = () => {
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Text>물건 찾기 게시판</Text>
            <TouchableOpacity style={styles.plus} onPress={handleIconPress}>
                <Icon name="pluscircleo" size={45} color="#000" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Write />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text>취소</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text>저장</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    plus: {
        position: 'absolute',
        bottom: 20, 
        right: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: '95%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    button: {
        width: '48%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        fontSize: 25
    }
});
