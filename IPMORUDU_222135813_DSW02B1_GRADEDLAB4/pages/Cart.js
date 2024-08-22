import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return ( 
    <ScrollView>
      <View style={{ padding: 20 }} >
        <Text style={{ fontSize: 24 }} >Your Cart</Text>
        {
          cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <View key={index} style={{ marginVertical: 10 }} >
       <Text>{item.name} - R{item.price}</Text>       
              </View>
            ))
          ) : (
            <Text style={{fontSize: wp(6), fontWeight: '600', color: 'yellow'}}>Your cart is empty</Text>
          )
        }
        <Text style={{fontSize: wp(6), fontWeight: '600', color: 'green'}} >Total: R{total}</Text>
      </View>
    </ScrollView>
  );
};

export default Cart;