import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const Splashscreen = () => {
    return (
        <View style={GlobalStyles.Container}>
            <LottieView
                source={require('../assets/AnimationSplash.json')}
                autoPlay
                loop
                style={GlobalStyles.loader}
            />
        </View>
    )
}

export default Splashscreen

