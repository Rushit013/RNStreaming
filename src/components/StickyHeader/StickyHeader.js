import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {get} from 'lodash';
import styles from './styles';
import {HStack, Circle, Icon, Box, Text, Avatar} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants';

const StickyHeader = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogout = () => {
    navigation.replace('Auth');
  };

  const logOutAlert = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onLogout(),
      },
    ]);
  };

  return (
    <HStack
      alignItems="center"
      height={60}
      px={4}
      backgroundColor={Colors.primary_light}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.openDrawer()}>
        <Circle size="40px" bg="white">
          <Icon as={<Feather name="user" />} color={Colors.black} size={5} />
        </Circle>
      </TouchableOpacity>
      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        <TouchableOpacity activeOpacity={0.7}>
          <HStack
            bg="white"
            space={2}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={20}
            p={1}>
            <Avatar
              size="xs"
              bg="cyan.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              TE
            </Avatar>
            <Text color={Colors.black} fontWeight={'bold'}>
              John Doe
            </Text>
            <Icon
              as={Ionicons}
              name="chevron-down"
              size="5"
              color={Colors.black}
            />
          </HStack>
        </TouchableOpacity>
      </Box>
      <HStack
        bg="white"
        space={2}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={20}
        p={1}>
        <Circle size="25px" bg={Colors.primary}>
          <Text color={'white'} fontWeight={'bold'}>
            $
          </Text>
        </Circle>
        <Text color={Colors.black} fontWeight={'bold'} pr={2}>
          200
        </Text>
      </HStack>
    </HStack>
  );
};

export default StickyHeader;
