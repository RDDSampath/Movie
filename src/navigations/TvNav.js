import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tv from '../screens/dashboard/Tv';
import DetailsScreen from '../screens/dashboard/DetailsScreen';


const Stack = createNativeStackNavigator();

const TvNav = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="TvScreen">
            <Stack.Screen name="TvScreen" component={Tv} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
  );
};

export default TvNav;