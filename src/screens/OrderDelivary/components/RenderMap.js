import React from "react"
import MapView,{PROVIDER_GOOGLE ,Marker} from "react-native-maps"
import {View,Text,Image,TouchableOpacity,StyleSheet} from "react-native"
import {COLORS,FONTS,icons,SIZES, GOOGLE_API_KEY} from "../../../constants"

const RenderMap=({route,navigation,initialRegion})=>{
    return(
        <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
      region={initialRegion}
     >
     </MapView>
   </View>
    )
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 900,
      width: 500,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default RenderMap;