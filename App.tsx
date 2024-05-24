import {StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './App/Navigation/Navigation';
import Splashscreen from './App/Screen/Splashscreen';
import Toast from 'react-native-toast-message';
import { MenuProvider } from 'react-native-popup-menu';

const Main = () => {
  return (
    <>
      <Navigation />
      <StatusBar />
    </>
  );
};

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(splashTimeout);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <MenuProvider>
        {isSplashVisible ? <Splashscreen /> : <Main />}
        </MenuProvider>
        <Toast />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
