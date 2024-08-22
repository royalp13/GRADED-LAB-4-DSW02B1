import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () => {
  const restaurants = [
    { id: 1,
      name: "Debonnairs Pizza",
        description: "Taste Something Amazing",
        menu: [
          {
              id: 1,
              name: 'CREAMY CHICKEN Triple Decker', 
              price: 200,
              image: "https://debonairspizza.co.za/images/menu/2023/oct/pizzas/october_menu_specialty_main_desktop_1640x437px.webp"
          },
          {
              id: 2,
              name: 'SWEET CHILLI CHICKEN Triple Decker', 
              price: 200,
              image: "https://debonairspizza.co.za/images/sem/chicken/2024/next-level/triple-decker-chicken.png"
          },
          {
              id: 3,
              name: 'MEATY Triple Decker', 
              price: 200,
              image: "https://tb-static.uber.com/prod/image-proc/processed_images/00350359bd8b9c63d03e2a0a441c0729/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          },
          {
              id: 4,
              name: 'CREAMY CHICKEN Triple Decker', 
              price: 229,
              image: "https://dynl.mktgcdn.com/p/d99eXvefwmQrqMC4VWjFwSzNXfmGnAS3Xmg3IPPKC-g/600x338.jpg"
          },
          {
              id: 5,
              name: 'SWEET CHILLI CHICKEN CRAM-DECKER', 
              price: 229,
              image: "https://debonairspizza.co.za/images/sem/chicken/2024/next-level/chicken-cram-decker.png"
          },
          {
              id: 6,
              name: 'MEATY CRAM-DECKER', 
              price: 229,
              image: "https://tb-static.uber.com/prod/image-proc/processed_images/fa513a4c99ec82bc6ce71375d4294286/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          },
        ]
      },


    { id: 2,
      name: "Burger King",
        description: "Have It Your Way",
        menu: [
          {
              id: 1,
              name: 'Big King® medium meal, Original Chicken medium meal, Whopper® medium meal, or a Vegan Royale meal.', 
              price: 120,
              image: "https://lordjunkie.home.blog/wp-content/uploads/2019/01/a5e37e7e-b2bb-4fc8-b5c8-f20a4461415b-03591-4_big_king_xl_pr_images_cr2.jpg"
          },
          {
              id: 2,
              name: 'BIG KING® - two freshly flame-grilled 100% pure beef patties, cheese, onions, pickles, and the unique BIG KING® sauce', 
              price: 55,
              image: "https://www.burgerking.ee/images/optimized/products/big-king-desktop-db8c6968f3e040d28a4dd3075d536a73.png"
          },
          {
              id: 3,
              name: '2x Extra-Long Chilli Cheese Medium Meals + 2x Small Hot Chocolates', 
              price: 150,
              image: "https://www.burgerking.lv/images/optimized/products/meals-extra-long-chili-cheese-desktop-4609945acc06b4b6b0c8515a6c431b7b.png"
          },
          {
              id: 4,
              name: 'Texas BBQ Jr Medium Meal', 
              price: 65,
              image: "https://tb-static.uber.com/prod/image-proc/processed_images/e7086e192bc3039271ef758521fdc1f6/a19bb09692310dfd41e49a96c424b3a6.jpeg"
          },
          {
              id: 5,
              name: '2x Fierce Whopper® Medium Meals and 4pc original chicken wings', 
              price: 180,
              image: "https://tb-static.uber.com/prod/image-proc/processed_images/a8fe126a6a138640396586c5783ad592/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
          },
          {
              id: 6,
              name: 'Triple Whopper® with Cheese sandwich only', 
              price: 85,
              image: "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/product/Main/HJD0042_Whopper_Cheese_Triple_ALC_WEB_800x600px.png"
          },
        ]
      },

      { id: 3,
      name: "McDonald's",
        description: "I'm lovin' it",
        menu: [
          {
              id: 1,
              name: 'Big Mac', 
              price: 52,
              image: "https://www.mcdonalds.co.za/media/products/bigmac-meal/Big-Mac-meal.webp"
          },
          {
              id: 2,
              name: 'McFeast', 
              price: 80,
              image: "https://www.mcdonalds.co.za/media/products/mcfeast-meal/Mcfeast-meal.webp"
          },
          {
              id: 3,
              name: 'McFeast Spicy', 
              price: 83,
              image: "https://pbs.twimg.com/media/CPlXNKYUEAAERUC.png"
          },
          {
              id: 4,
              name: 'Grand Chicken Habanero', 
              price: 70,
              image: "https://www.mcdonalds.co.za/media/products/chicken-habanero/772x440-Grand-Chicken-Habanero.webp"
          },
          {
              id: 5,
              name: 'Jalapeño Chicken Meal', 
              price: 57,
              image: "https://www.mcdonalds.co.za/media/products/jalapeno-chicken-meal/Jalapeno-Chicken-Meal.png"
          },
          {
              id: 6,
              name: 'Cajun Chicken Meal', 
              price: 79,
              image: "https://www.mcdonalds.co.za/media/products/cajun-chicken-meal/Cajun-meal.webp"
          },
        ]
      },
  ];

  return ( 
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{fontSize: wp(8), fontWeight: '600', color: 'orange'}}>Restaurants</Text>
        {
          restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} restaurants={restaurants} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;