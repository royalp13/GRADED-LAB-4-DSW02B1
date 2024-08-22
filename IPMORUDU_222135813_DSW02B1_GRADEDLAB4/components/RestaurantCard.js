import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RestaurantCard = ({ restaurant, restaurants }) => {
  const nav = useNavigation();

  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }} >
      <Text style={{ fontSize: 18 }}>{restaurant.name}</Text>
      <Text>{restaurant.description}</Text>
      <Image 
      source={{ uri: restaurant.menu[0].image }}
      style={{ width: '100%', height: 150 }}
       />
      <Button 
      title="View Menu" 
      onPress={() => nav.navigate('Restaurant', { id: restaurant.id, restaurants }) } />
    </View>
  );
};

export default RestaurantCard;