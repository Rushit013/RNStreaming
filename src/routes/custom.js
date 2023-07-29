/**atul15r
 * React Native Music Player
 * https://github.com/atul15r
 *7 Aug 2020
 * @format
 * @flow
 */

import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

class Custom extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  _Share = () => {};

  render() {
    const {...rest} = this.props;
    const bc2 = '#fafafa';
    const inactive = '#13292A';

    return (
      <>
        <View
          style={{
            backgroundColor: inactive,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Images/logo.png')}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginTop: 20,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 10,
              color: bc2,
              fontFamily: 'sans-serif-medium',
            }}>
            RNStreaming
          </Text>
        </View>
        <DrawerContentScrollView {...rest}>
          <View
            style={{
              backgroundColor: bc2,
              height: 1,
              width: '80%',
              left: '10%',
            }}></View>
          <DrawerItemList {...rest} />
        </DrawerContentScrollView>
      </>
    );
  }
}

Custom.propTypes = {
  settings: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  settings: state.settings,
});

const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(Custom);
