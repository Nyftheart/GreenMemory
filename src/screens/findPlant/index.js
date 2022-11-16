import React from 'react';
import { TouchableOpacity, TurboModuleRegistry, View, Text } from 'react-native';
import styled from 'styled-components';
import headerImg from '../../images/iPhone 13/header.png';
import InterBold from '../../assets/fonts/Inter-Bold.ttf';
import { FlatList } from 'react-native-gesture-handler';
import Plant from '../../components/Plant';
import { useDispatch, useSelector } from 'react-redux';
import { addPlant, deletePlant } from '../../actions/plantlist';

const FindPlant = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const plantValue = useSelector(state => state.plantlist.value);

  const addPlantToRedux = () => {
    //setPlant([...plants, {label: input, id: `${Math.random()}`}])
    dispatch(addPlant({label: input, id:`${Math.random()}`}));
    setInput('');
  };

  return (
    <SafeAreaView>
      <Header>
        <TilteText>Trouve ta plante</TilteText>
        <IntroText>Le savant connait le nom des plantes. Le poète les appelle par leur prénom</IntroText>
      </Header>
      <TouchableOpacity onPress={addPlantToRedux}>
            <Text>Add Plant</Text>
      </TouchableOpacity>
      <TextInput 
            value={input}
            onChangeText={text => setInput(text)}
            placeholder= "+"
        />
      {plantValue.map((plant, index) => (
        <View key={plant.id}>
          <Text>{plant.label}</Text>
          <TouchableOpacity onPress={() => dispatch(deletePlant(plant.id))}>
            <Text>Done</Text>
          </TouchableOpacity>
      </View>
      ))}
    </SafeAreaView>
  );
};

const TextInput = styled.TextInput`
  text-align: center;
  font-size: 45px;
  color: white;
`
const TilteText = styled.Text`
  src: url(${InterBold});
  text-align: center;
  font-size: 30px;
  color: white;
`

const IntroText = styled.Text`
  src: url(${InterBold});
  font-size: 16px;
  color: white;
`

const Header = styled.View`
  position: static;
  background-image: headerImg;
  width: 100%;
  height: 25%;
`

const SafeAreaView = styled.SafeAreaView`
  background-color: #B6E0CE;
  height: 100%;
`

export default FindPlant;