import React from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {icons, COLORS, SIZES, FONTS} from '../../../constants';
import RenderDots from './RenderDots';
import {isIphoneX} from 'react-native-iphone-x-helper';
const RenderOrder = ({restaurant, scrollX,getBasketItemCount,sumOrder,navigation,currentLocation}) => {
  return (
    <View>
      <RenderDots restaurant={restaurant} scrollX={scrollX} />
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
          }}>
          <Text style={{...FONTS.h3}}>{getBasketItemCount()} Items in Cart</Text>
          <Text style={{...FONTS.h3}}>${sumOrder()}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: COLORS.darkgray}}
            />
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.h4,
                letterSpacing: 1.2,
              }}>
              Location
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: COLORS.darkgray}}
            />
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.h4,
                letterSpacing: 1.2,
              }}>
              9080
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: SIZES.padding * .4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={()=>navigation.navigate("OrderDelivery",{
                restaurant: restaurant,
                currentLocation: currentLocation
            })}
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={{color: Colors.white, ...FONTS.h2}}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isIphoneX() && (
        <View
          style={{
            position: 'absolute',
            bottom: -34,
            left: 0,
            right: 0,
            height: 34,
            backgroundColor: COLORS.white,
          }}>
          {' '}
        </View>
      )}
    </View>
  );
};

export default RenderOrder;
