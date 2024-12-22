import {StyleSheet} from 'react-native';
import {useColors} from '../../Utils/Styles/Colors';

export const CityStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: useColors.appWhite,
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  title: {fontSize: 30, color: useColors.appBlack, fontWeight: 'bold'},
  cityListContainer: {
    borderColor: useColors.appBorder,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 18,
    marginBottom: 30,
    paddingVertical: 9,
    backgroundColor: useColors.appWhite,
  },
  city: {
    fontSize: 16,
    color: useColors.appBorder,
    fontWeight: 400,
  },
  SelectedCityBorder: {
    borderColor: useColors.primary,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 18,
    marginBottom: 30,
    paddingVertical: 9,
    backgroundColor: useColors.appWhite,
  },
  SelectedCity: {
    fontSize: 16,
    color: useColors.primary,
    fontWeight: 400,
  },
  DisableGetStartedBtn: {
    backgroundColor: useColors.appBorder,
    marginBottom: 30,
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  EnableGetStartedBtn: {
    backgroundColor: useColors.primary,
    marginBottom: 30,
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {fontSize: 20, color: useColors.appWhite},
});
