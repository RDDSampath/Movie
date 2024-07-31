import React from 'react';
import 'react-native-gesture-handler';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';
import { images } from './src/constants';
import { MovieNav, TvNav } from './src/navigations';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
       <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Movie"
        component={MovieNav}
        options={() => ({
          tabBarIcon: () => (
            <View style={[{alignItems: 'center'}]}>
              <Image
                source={ images.movie}
                style={styles.bottomTabIcons}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Tv"
        component={TvNav}
        options={{
          tabBarIcon: () => (
            <View style={[{alignItems: 'center'}]}>
              <Image
                source={ images.tv}
                style={styles.bottomTabIcons}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  bottomTabIcons: {
    height: wp(5),
    width: wp(5),
    marginTop: hp(1),
  },
});

export default App;
