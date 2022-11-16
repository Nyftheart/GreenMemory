import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getPlants} from '../../actions/plants';

const Plants = () => {
  const dispatch = useDispatch();
  const plants = useSelector(state => state.plants.value);

  useEffect(() => {
    console.log('plants');
    dispatch(getPlants());
  }, [dispatch]);

  return (
    <ScrollViewPlants>
      <Text>Vue des plantes</Text>
      {plants.map((plants, index) => (
        <View key={index}>
          <TextPlantType>{plants.type}</TextPlantType>
          <TextPlantName>{plants.name}</TextPlantName>
          <Text>{plants.etat}</Text>
          <ImagePlants source={plants.image} />
          <Text>A Propos de moi ! </Text>
          <Text>{plants.lorem}</Text>
        </View>
      ))}
    </ScrollViewPlants>
  );
};

const ScrollViewPlants = styled.ScrollView``;
const TextPlantType = styled.Text`
  font-size: 20;
  text-align: left;
`;
const TextPlantName = styled.Text`
  font-size: 25;
  text-align: left;
  font-weight: bold;
`;
const ImagePlants = styled.Image`
  margin-top: 200;
  margin-left: 50;
`;

export default Plants;
