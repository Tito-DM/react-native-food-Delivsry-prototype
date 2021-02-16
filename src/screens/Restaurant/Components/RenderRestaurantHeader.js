import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {icons, COLORS, SIZES, FONTS} from '../../../constants';
import RenderHeader from '../../Home/Components/RenderHeader';


const RenderRestaurantHeader = ({route, navigation,restaurant}) => {
   
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 50,
            padding: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.back}
            style={{width: 30, height: 30}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {/* restaurent name */}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.lightGray2,
              padding: SIZES.padding * 3,
              borderRadius: SIZES.radius,
            }}>
            <Text style={{...FONTS.h3, letterSpacing: 1.2}}>
              {' '}
              {restaurant?.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  export default RenderRestaurantHeader;