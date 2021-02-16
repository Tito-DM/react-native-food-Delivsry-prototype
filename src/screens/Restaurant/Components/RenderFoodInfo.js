import React, {useState} from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../../../constants';
import RenderDots from './RenderDots';
import RenderOrder from './RenderOrder';

const RenderFoodInfo = ({restaurant, scrollX,navigation,currentLocation}) => {
  const [orderItems, setOrderItems] = useState([]);

  const getOrderQty = (menuId) => {
    let OrderItem = orderItems.filter((a) => a.menuId == menuId);

    if (OrderItem.length > 0) {
      return OrderItem[0].qty;
    }

    return 0;
  };

  const getBasketItemCount = () => {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);
    return itemCount;
  };

  const sumOrder = () =>{
    let total = orderItems.reduce((a, b) => a + (b.total|| 0), 0);
    return total.toFixed(2);
  }

  const editOrder = (action, menuId, price) => {
    if (action == '+') {
      let orderList = orderItems.slice();
      let item = orderList.filter((a) => a.menuId == menuId);
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItems(orderList);
    } else {
      let orderList = orderItems.slice();
      let item = orderList.filter((a) => a.menuId == menuId);
      if (item.length > 0) {
        let newQty = item[0].qty - 1;
        if (newQty >= 0) {
          item[0].qty = newQty;
          item[0].total = item[0].qty * price;
        }
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItems(orderList);
    }
  };
  return (
    <View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}>
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{alignItems: 'center'}}>
            <View style={{height: SIZES.height * 0.35}}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{width: SIZES.width, height: '100%'}}
              />
              {/* quantity */}
              <View
                style={{
                  position: 'absolute',
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => editOrder('-', item.menuId, item.price)}
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}>
                  <Text style={{...FONTS.body1}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{...FONTS.h2}}>{getOrderQty(item.menuId)}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => editOrder('+', item.menuId, item.price)}
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}>
                  <Text style={{...FONTS.body1}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* name & description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <Text
                style={{marginVertical: 10, alignItems: 'center', ...FONTS.h2}}>
                {item.name}-{item.price.toFixed(2)}{' '}
              </Text>
              <Text style={{...FONTS.body3}}>{item.description}</Text>
              {/* calories */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Image source={icons.fire} style={{width: 20, height: 20}} />
                <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
                  {item.calories.toFixed(2)} cal
                </Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      <RenderDots />
      <RenderOrder
        restaurant={restaurant}
        navigation= {navigation}
        currentLocation={currentLocation}
        scrollX={scrollX}
        getBasketItemCount={getBasketItemCount}
        sumOrder={sumOrder}
      />
    </View>
  );
};

export default RenderFoodInfo;
