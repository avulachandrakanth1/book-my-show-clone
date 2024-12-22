import React from 'react';
import {Image, View} from 'react-native';
import {useColors} from '../../Utils/Styles/Colors';

const Splash = () => {
  return (
    <View style={{flex: 1, backgroundColor: useColors.primary}}>
      <Image
        style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        source={{
          uri: 'https://mir-s3-cdn-cf.behance.net/projects/404/4fabff156214799.Y3JvcCw5ODEsNzY4LDIxLDA.png',
        }}
      />
    </View>
  );
};

export default Splash;
