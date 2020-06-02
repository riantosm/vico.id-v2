import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import './config/firebase';
import {store} from './redux/store';
import {BottomTab, BottomTabMaps} from './router';
import {DetailCase, ReadHelp, ReadInfo, Splash} from './screens';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      <Provider store={store}>{isLoading ? <Splash /> : <Root />}</Provider>
    </>
  );
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
