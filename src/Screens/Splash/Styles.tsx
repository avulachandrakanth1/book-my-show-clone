import {StyleSheet} from 'react-native';
import {useColors} from '../../Utils/Styles/Colors';

export const SplashStyles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    backgroundColor: useColors.primary,
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
