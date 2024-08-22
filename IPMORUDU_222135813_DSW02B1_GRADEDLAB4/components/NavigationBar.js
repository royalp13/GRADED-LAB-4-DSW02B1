import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NavigationBar = () => {
  const nav = useNavigation();

  return(
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#eee', zIndex: 1 }}>
          <TouchableOpacity onPress={() => nav.navigate('Home')}>
            <Text style={{fontSize: 16, color: 'orange'}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate('Cart')}>
            <Text style={{fontSize: 16, color: 'orange'}}>Cart</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default NavigationBar;