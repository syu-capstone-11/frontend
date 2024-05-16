import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FoundItBoard } from './screens/FoundItBoard';
import { LostItemBoard } from "./screens/LostItemBoard";
import { NavigationContainer } from "@react-navigation/native";

// 네비게이션 스택 생성
const Tab = createBottomTabNavigator();

// 네비게이션 라우팅, 각종 설정 등 이 파일에서 여러 화면을 관리
export const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Main">
                <Tab.Screen name="물건 찾아 주기 게시판" component={FoundItBoard} options={{tabBarLabel: '물건 찾아 주기'}}/>
                <Tab.Screen name="물건 찾기 게시판" component={LostItemBoard} options={{tabBarLabel: '물건 찾기'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};