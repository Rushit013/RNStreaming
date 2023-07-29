import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {get, size} from 'lodash';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HStack, Circle, Icon, Box, Text, Avatar, Image} from 'native-base';
import {Colors} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';

const slideWidth = wp('75%');
const itemHorizontalMargin = wp('2%');

export const sliderWidth = wp('100%');
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const data = [
  {
    name: 'John Smith',
    cover:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'John Doe',
    cover:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'John Lane',
    cover:
      'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'John Smith',
    cover:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

function DashboardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const carouselRef = useRef(null);

  function _renderItem({item, index}) {
    console.log('--- Dashboard', index);
    const isFocused = currentIndex == index;

    // if (isFocused) {
    return (
      <Box alignItems={'center'} justifyContent={'center'}>
        <Circle size={`${wp('35%')}px`} bg={Colors.primary_light}>
          <Circle
            size={`${wp('30%')}px`}
            bg={Colors.primary}
            overflow={'hidden'}>
            <Circle
              size={`${wp('28%')}px`}
              bg={Colors.primary}
              overflow={'hidden'}>
              <Image
                source={{uri: item?.cover}}
                style={{
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                }}
              />
            </Circle>
          </Circle>
          {isFocused && (
            <Circle
              size="35px"
              bg={Colors.black}
              style={{
                position: 'absolute',
                bottom: -4,
              }}>
              <Icon as={<Feather name="edit-3" />} color={'white'} size={4} />
            </Circle>
          )}
        </Circle>
        <Text color={Colors.black} fontWeight={'600'} py={2} fontSize={18}>
          {item.name}
        </Text>
      </Box>
    );
    // } else {
    //   return (
    //     <Box>
    //       <Circle
    //         size={`${wp('42%')}px`}
    //         bg={Colors.primary}
    //         overflow={'hidden'}>
    //         <Image
    //           source={{uri: item?.cover}}
    //           style={{
    //             height: '100%',
    //             width: '100%',
    //             overflow: 'hidden',
    //           }}
    //         />
    //       </Circle>
    //     </Box>
    //   );
    // }
  }
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        sliderWidth={sliderWidth}
        // itemHeight={hp('25%')}
        // sliderHeight={hp('25%')}
        itemWidth={sliderWidth * 0.5}
        hasParallaxImages={true}
        inactiveSlideScale={0.64}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={{
          marginTop: 15,
          overflow: 'visible',
        }}
        // removeClippedSubviews={true}
        // enableMomentum={true}
        firstItem={currentIndex}
        useScrollView={true}
        renderItem={_renderItem}
        // pagingEnabled
        // decelerationRate={0.9}
        onSnapToItem={index => {
          setCurrentIndex(index);
        }}
        onBeforeSnapToItem={index => {}}
      />
      <Pagination
        dotsLength={size(data)}
        activeDotIndex={currentIndex}
        containerStyle={styles.paginationContainer}
        dotColor={'#f4bb40'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'#fbeec6'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        carouselRef={carouselRef.current}
        tappableDots={!!carouselRef.current}
      />
    </View>
  );
}

export default DashboardCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 12,
  },
  paginationContainer: {
    width: '100%',
    paddingVertical: 8,
  },
  paginationDot: {
    height: 4,
    width: wp('70%') / size(data),
  },
});
