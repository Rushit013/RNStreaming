import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {StickyHeader, DashboardCarousel} from '../../components';
import {
  Text,
  Box,
  HStack,
  Circle,
  Icon,
  VStack,
  Avatar,
  Divider,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const actionButtonData = [
  {
    label: 'Custom Avatar',
    icon: 'folder-check-outline',
    color: Colors.bg_light,
  },
  {label: 'Add Credits', icon: 'currency-eur', color: Colors.primary},
  {label: 'My Library', icon: 'account-plus-outline', color: Colors.bg_light},
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {};

  render() {
    const renderActionItem = (item, index) => {
      return (
        <VStack
          style={{
            width: wp('32%') - 12,
            marginHorizontal: index === 1 ? 12 : 0,
          }}
          py={4}
          alignItems={'center'}
          justifyContent={'center'}
          bg="white"
          borderRadius={12}>
          <Circle size="50px" bg={item.color}>
            <Icon
              as={<MaterialCommunityIcons name={item.icon} />}
              color={Colors.black}
              size={5}
            />
          </Circle>
          <Text fontSize={12} py={1}>
            {item.label}
          </Text>
        </VStack>
      );
    };

    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: Colors.primary_light,
        }}>
        <StickyHeader />
        <ScrollView
          style={{
            backgroundColor: 'white',
          }}>
          <DashboardCarousel />
          <View style={styles.Wrapper}>
            <Text
              fontWeight={'bold'}
              fontColor={Colors.text_color}
              fontSize={15}>
              Recently Played
            </Text>

            <Box
              p={3}
              borderWidth={1}
              my={4}
              borderRadius={8}
              borderColor={'grey'}
              backgroundColor={'white'}>
              <HStack space={2} alignItems={'center'} justifyContent={'center'}>
                <HStack space={4} flex={1} alignItems={'center'}>
                  <Circle size="50px" bg="#4b5c5b">
                    <Icon
                      as={<AntDesign name="pdffile1" />}
                      color={'white'}
                      size={6}
                    />
                  </Circle>

                  <VStack space={0}>
                    <Text
                      fontSize={14}
                      fontWeight={'700'}
                      fontColor={Colors.text_color}>
                      File Name
                    </Text>
                    <Text fontSize={12} fontColor={Colors.text_color}>
                      23 June
                    </Text>
                  </VStack>
                </HStack>
                <Divider
                  bg="grey"
                  thickness="1"
                  mx="2"
                  h={7}
                  orientation="vertical"
                />
                <HStack
                  space={2}
                  alignItems={'center'}
                  justifyContent={'center'}>
                  <Avatar
                    size="xs"
                    bg="cyan.500"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    }}>
                    TE
                  </Avatar>
                  <Text fontSize={12}>Jhon Doe</Text>
                  <Circle size="26px" bg={Colors.primary} ml={4}>
                    <Icon
                      as={<Ionicons name="play" />}
                      color={'white'}
                      size={3}
                    />
                  </Circle>
                </HStack>
              </HStack>

              <HStack
                bg={Colors.bg_light}
                py={2}
                my={3}
                borderRadius={8}
                space={3}
                alignItems={'center'}>
                <Icon
                  as={<Ionicons name="chatbubble-ellipses-outline" />}
                  color={Colors.black}
                  size={5}
                  ml={8}
                />
                <Text fontSize={12}>
                  "If things go wrong, don't go with them."
                </Text>
              </HStack>
            </Box>

            <FlatList
              data={actionButtonData}
              numberOfColumns={3}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => renderActionItem(item, index)}
            />

            <HStack
              alignContent={'center'}
              justifyContent={'space-between'}
              bg={'#8ccdbf'}
              p={4}
              mt={5}
              borderRadius={8}>
              <Text
                fontSize={15}
                fontWeight={'bold'}
                color={'white'}
                alignSelf={'center'}>
                Free Plan
              </Text>
              <Text
                fontSize={15}
                fontWeight={'bold'}
                color={'white'}
                alignSelf={'center'}>
                $0 / Mo
              </Text>
              <LinearGradient
                colors={['#d146a2', '#7d5f8d', '#457c7b']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 18,
                }}>
                <Text fontSize={12} fontWeight={'bold'} color={'white'}>
                  Uparade Now
                </Text>
              </LinearGradient>
            </HStack>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, null)(HomeScreen);
