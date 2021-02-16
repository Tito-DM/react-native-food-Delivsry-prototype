import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  initialCurrentLocation,
  categoryData,
  restaurantData,
} from '../../../Data/Data';
import {COLORS,SIZES, FONTS} from '../../../constants';
import RenderRestaurantList from '../Components/RenderRestaurantList';

const RenderMainCategories = ({navigation}) => {
  const [categories, setCategoris] = useState(categoryData);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [Restaurant, setRestaurant] = useState(restaurantData);
  const [currentLocation, setcurrentLocation] = useState(
    initialCurrentLocation,
  );

  const onSelectCategory = (category) => {
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id),
    );
    setRestaurant(restaurantList)
    setSelectedCategories(category);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor: (selectedCategories?.id == item.id) ? COLORS.primary:'#004d40',
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: SIZES.padding,
          ...styles.shadow,
        }}
        onPress={() => onSelectCategory(item)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>
        <Text
          style={{
            color: COLORS.white,
            marginTop: SIZES.padding,
            ...FONTS.body5,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
    <View style={{padding: SIZES.padding2}}>
      <Text style={{...FONTS.h1}}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
      />
    </View>
    <RenderRestaurantList  restaurent ={Restaurant} navigation={navigation}/>
    </View>
    
  );
};
const styles = StyleSheet.create({
  constainer: {
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
export default RenderMainCategories;
