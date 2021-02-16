import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  initialCurrentLocation,
  categoryData,
  affordable,
  fairPrice,
  expensive,
  restaurantData,
} from '../../../Data/Data';
import {COLORS, icons, SIZES, FONTS} from '../../../constants';
import {color} from 'react-native-reanimated';

const RenderRestaurantList = ({restaurent,navigation}) => {
  const [categories, setCategoris] = useState(categoryData);
  const [currentLocation, setcurrentLocation] = useState(
    initialCurrentLocation,
  );
  const getCategoryNameById = (id) => {
    let category = categories.filter((a) => a.id == id);
    return category.length > 0 ? category[0].name : null;
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{marginBottom: SIZES.padding * 2}} onPress={()=>navigation.navigate("Restaurant",{
        item,
        currentLocation
      })} >
        <View style={{marginBottom: SIZES.padding * 2}}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{width: '100%', height: 200, borderRadius: SIZES.radius}}
          />
          {/* min section*/}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 40,
              width: 120,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eceff1',
            }}>
            <Text style={{...FONTS.h4, letterSpacing: 1.4}}>
              {item.duration}
            </Text>
          </View>
        </View>
        {/* restaurante info*/}
        <Text style={{...FONTS.body2, letterSpacing: 1.4}}>{item.name}</Text>
        {/* rating*/}
        <View style={{marginTop: SIZES.padding, flexDirection: 'row'}}>
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body3, letterSpacing: 1.4}}>
            {item.rating}
          </Text>
          {/* categories*/}
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            {item.categories.map((categoryId) => {
              return (
                <View style={{flexDirection: 'row'}} key={categoryId}>
                  <Text style={{...FONTS.body3, letterSpacing: 1.4}}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
                    .
                  </Text>
                </View>
              );
            })}

            {/* price*/}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}>
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={restaurent}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
export default RenderRestaurantList;
