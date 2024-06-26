import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FoundItBoard} from './screens/FoundItBoard';
import {LostItemBoard} from './screens/LostItemBoard';
import {MainScreen} from './screens/Main';
import Icon from 'react-native-vector-icons/AntDesign';

// 네비게이션 스택 생성
const Tab = createBottomTabNavigator();

// 네비게이션 라우팅, 각종 설정 등 이 파일에서 여러 화면을 관리
export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainScreen"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === '찾아주기 게시판') {
              iconName = 'find';
            } else if (route.name === '찾기 게시판') {
              iconName = 'search1';
            } else if (route.name === 'MainScreen') {
              iconName = 'home';
            } else {
              iconName = 'questioncircleo';
            }
            return <Icon name={iconName} size={27} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'darkgray',
          tabBarStyle: {height: 72},
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 7,
          },
          tabBarIconStyle: {marginTop: 7, marginBottom: 2},
        })}>
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarButton: () => null, // 하단 네비게이션 바에 표시되지 않도록 함
          }}
        />
        <Tab.Screen
          name="찾아주기 게시판"
          component={FoundItBoard}
          options={({navigation}) => ({
            tabBarLabel: '물건 찾아주기',
            headerStyle: {backgroundColor: '#92BAF7', height: 62},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View style={{paddingLeft: 17, paddingTop: 5.5}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="찾기 게시판"
          component={LostItemBoard}
          options={({navigation}) => ({
            tabBarLabel: '물건 찾기',
            headerStyle: {backgroundColor: '#92BAF7', height: 62},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View style={{paddingLeft: 17, paddingTop: 5.5}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
