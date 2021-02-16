import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RenderHeader from './Components/RenderHeader';
import RenderMainCategories from './Components/RenderMainCategories';
import {COLORS} from '../../constants';

const Home = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.constainer}>
      <RenderHeader />
      <RenderMainCategories navigation={navigation}/>
    </SafeAreaView>
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
export default Home;
