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
import {icons, COLORS, SIZES, FONTS} from '../../constants';
import RenderFoodInfo from './Components/RenderFoodInfo';
import RenderOrder from './Components/RenderOrder';
import RenderRestaurantHeader from './Components/RenderRestaurantHeader';
const scrollX = new Animated.Value(0);
const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurent] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurent(item);
    setCurrentLocation(currentLocation);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <RenderRestaurantHeader
        route={route}
        navigation={navigation}
        restaurant={restaurant}
      />
      <RenderFoodInfo
        restaurant={restaurant}
        scrollX={scrollX}
        navigation={navigation}
        currentLocation={currentLocation}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
export default Restaurant;
