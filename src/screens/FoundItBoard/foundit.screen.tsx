import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';

export const FoundItBoard = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>물건 찾아 주기 게시판</Text>
        </View>
    )
}