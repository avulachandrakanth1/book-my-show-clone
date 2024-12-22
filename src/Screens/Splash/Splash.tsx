import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {SplashStyles} from './Styles';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.replace('select-city');
    }, 3000);
  }, []);
  return (
    <View style={SplashStyles.ImageContainer}>
      <Image
        style={SplashStyles.logo}
        source={{
          uri: 'https://mir-s3-cdn-cf.behance.net/projects/404/4fabff156214799.Y3JvcCw5ODEsNzY4LDIxLDA.png',
        }}
      />
    </View>
  );
};

export default Splash;
