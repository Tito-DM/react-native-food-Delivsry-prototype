import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import RenderMap from './components/RenderMap';

const OrderDelivery = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [fromLocation, setfromLocation] = useState(null);
  const [toLocation, settoLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    let {restaurant, currentLocation} = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };
    setRestaurant(restaurant);
    setStreetName(street);
    setfromLocation(fromLoc);
    settoLocation(toLoc);
    setRegion(mapRegion);
  }, []);
  return (
    <View>
      <RenderMap route={route} navigation={navigation} initialRegion={region}/>
    </View>
  );
};

export default OrderDelivery;
