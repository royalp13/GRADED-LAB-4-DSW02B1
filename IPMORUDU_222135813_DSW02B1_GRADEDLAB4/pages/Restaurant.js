import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Restaurant = ({ route }) => {
  const { id, restaurants } = route.params;

  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return <Text>Restaurant not found</Text>;
  }


  return (
    <ScrollView style={{ padding: 20}}>
      <View>
        <Text style={{fontSize: wp(7), fontWeight: '600', color: '#374151'}}>{restaurant.name}</Text>
        {
          restaurant.menu.map(item => (
            <View key={item.id} style={{ marginBottom: 20 }}> 
              <Text style={{fontSize: wp(5), color: 'orange'}}>{item.name}</Text>
              <Image  
                source={{ uri: item.image }}
                style={{ width: '100%', height: 200 }}
              />
              <Text style={{fontSize: wp(6), fontWeight: '600', color: 'green'}}>Price: R{item.price}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView>
  );
};

export default Restaurant;