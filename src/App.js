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
import {BottomTab} from './router';
import {DetailCase, Maps, Splash} from './screens';

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
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTab}
          options={{headerShown: false}}
        />
        {/* case{ */}
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="DetailCase" component={DetailCase} />
        {/* }case */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
