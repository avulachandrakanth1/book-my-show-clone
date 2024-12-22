import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CityStyles} from './CityStyles';
import {Cities} from '../../Utils/StaticData/data';
import {useColors} from '../../Utils/Styles/Colors';

const SelectCity = () => {
  const [city, selectCity] = useState();
  const [isDisabled, setDisabled] = useState(true);

  const citySelect = (index: any) => {
    selectCity(index);
    console.log(city);
    setDisabled(false);
  };

  return (
    <SafeAreaView style={CityStyles.container}>
      <Text style={CityStyles.title}>SelectCity</Text>
      <View>
        <FlatList
          numColumns={3}
          style={{marginTop: 30, padding: 0}}
          data={Cities}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => citySelect(index)}
              style={
                city == index
                  ? CityStyles.SelectedCityBorder
                  : CityStyles.cityListContainer
              }>
              <Text
                style={
                  city == index ? CityStyles.SelectedCity : CityStyles.city
                }
                key={item.id}>
                {item.city}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={
            isDisabled
              ? CityStyles.DisableGetStartedBtn
              : CityStyles.EnableGetStartedBtn
          }
          disabled={isDisabled}>
          <Text style={CityStyles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCity;
