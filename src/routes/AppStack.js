import React from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from '../screens';
import Custom from './custom';
import Ion from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Fonts} from '../constants';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

export const AppStack = () => {
  const createTab = props => (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Colors.black}
        inactiveColor={Colors.black}
        shifting={false}
        backBehavior="history"
        barStyle={{
          backgroundColor: Colors.primary_light,
          fontSize: 7,
          borderColor: 'transparent',
          borderTopColor: Colors.black,
          borderWidth: 0.5,
          ...Platform.select({
            ios: {
              height: 70,
            },
          }),
        }}>
        <Tab.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, tintColor}) => (
              <Iconn
                name="home"
                color={Colors.black}
                size={23}
                style={{fontWeight: '100'}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Create"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Create',
            tabBarIcon: ({focused, tintColor}) => (
              <MaterialIcons
                name="article"
                color={Colors.black}
                size={21}
                style={{fontWeight: '100'}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Text',
            tabBarIcon: ({focused, tintColor}) => (
              <Ion
                name="chatbubble-ellipses-outline"
                color={Colors.black}
                size={23}
                style={{fontWeight: '100'}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused, tintColor}) => (
              <Ion
                name="settings-sharp"
                color={Colors.black}
                size={22}
                style={{fontWeight: '100'}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Drawer.Navigator
        drawerStyle={{
          height: '100%',
          width: '70%',
          backgroundColor: 'white',
          zIndex: 9,
        }}
        drawerContentOptions={{
          activeTintColor: '#f0f',
          backgroundColor: '#ccc',
          inactiveTintColor: '#000',
          labelStyle: {
            fontSize: 13,
            marginLeft: -17,
            fontFamily: 'sans-serif-medium',
          },
          activeBackgroundColor: '#00000000',
        }}
        drawerContent={props => <Custom {...props} />}
        initialRouteName="Home"
        drawerType="front"
        overlayColor="#0000004a"
        edgeWidth={0}
        screenOptions={{
          headerShown: false,
        }}
        backBehavior="initialRoute">
        <Drawer.Screen
          name="Home"
          children={createTab}
          options={{
            drawerIcon: ({focused, color}) => (
              //  <HomeIcon
              //    name="home"
              //    size={13}
              //    color={color}
              //    style={{marginLeft: 12}}
              //  />
              <Ion
                name="home-outline"
                size={18}
                color={color}
                style={{marginLeft: 12}}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    // height: '100%',
    backgroundColor: '#281034',
  },
});
