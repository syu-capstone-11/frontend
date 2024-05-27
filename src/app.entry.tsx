import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FoundItBoard} from './screens/FoundItBoard';
import {LostItemBoard} from './screens/LostItemBoard';
import Icon from 'react-native-vector-icons/AntDesign';

// 네비게이션 스택 생성
const Tab = createBottomTabNavigator();

// 네비게이션 라우팅, 각종 설정 등 이 파일에서 여러 화면을 관리
export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="물건 찾아주기 게시판"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === '물건 찾아주기 게시판') {
              iconName = 'find';
            } else if (route.name === '물건 찾기 게시판') {
              iconName = 'search1';
            } else {
              iconName = 'questioncircleo';
            }
            return <Icon name={iconName} size={27} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'lightgrey',
          tabBarStyle: {height: 64},
          tabBarLabelStyle: {fontSize: 17},
        })}>
        <Tab.Screen
          name="물건 찾아주기 게시판"
          component={FoundItBoard}
          options={{
            tabBarLabel: '물건 찾아주기',
            headerStyle: {backgroundColor: '#92BAF7', height: 62},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Tab.Screen
          name="물건 찾기 게시판"
          component={LostItemBoard}
          options={{
            tabBarLabel: '물건 찾기',
            headerStyle: {backgroundColor: '#92BAF7', height: 62},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
