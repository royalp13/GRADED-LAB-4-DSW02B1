import React from 'react';
import { View, Text, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FoodItem = ({ item, addToCart }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: 'white'}}>
      <Text style={{ fontSize: 18, color: '#eee'}}>{item.name}</Text>
      <Text style={{ fontSize: 18, color: 'orange', fontWeight: 'bold'}}>R {item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );
};

export default FoodItem;