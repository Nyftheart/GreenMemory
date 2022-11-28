import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
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
          <ImagePlants source={{uri: plants.image}} />
          <TextDescription>A Propos de moi !</TextDescription>
          <TextDescription>{plants.lorem}</TextDescription>
        </View>
      ))}
    </ScrollViewPlants>
  );
};

const ScrollViewPlants = styled.ScrollView``;
const TextPlantType = styled.Text`
  font-size: 20px;
  text-align: left;
`;
const TextPlantName = styled.Text`
  font-size: 25px;
  text-align: left;
  font-weight: bold;
`;
const ImagePlants = styled.Image`
  height: 200px;
  width: 200px;
  margin-top: 200px;
  margin-left: 50px;
`;

const TextDescription = styled.Text`
  text-align: center;
`;

export default Plants;
