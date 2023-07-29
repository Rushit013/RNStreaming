import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const winWidth = width;
export const winHeight = height;
export const isIOS = Platform.OS === 'ios';
