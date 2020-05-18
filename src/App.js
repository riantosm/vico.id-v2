import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {BottomTab} from './router';
import {Maps, Splash, DetailCase} from './screens';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
