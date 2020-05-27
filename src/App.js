import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';
import React, {useEffect, useState} from 'react';
import {
  apiKey,
  appId,
  authDomain,
  databaseURL,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from 'react-native-dotenv';
import {BottomTab, BottomTabMaps} from './router';
import {DetailCase, ReadInfo, Splash, ReadHelp} from './screens';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? <Splash /> : <Root />;
};

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Root" component={BottomTab} />
        {/* case{ */}
        <Stack.Screen name="Maps" component={BottomTabMaps} />
        <Stack.Screen name="DetailCase" component={DetailCase} />
        {/* }case */}
        {/* information{ */}
        <Stack.Screen name="ReadInfo" component={ReadInfo} />
        {/* }information */}
        {/* help{ */}
        <Stack.Screen name="ReadHelp" component={ReadHelp} />
        {/* }help */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
