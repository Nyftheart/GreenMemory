import React from 'react';
import styled from "styled-components";

const Plant = (props) => {
  return(
    <Rectangle>
      <Text>{props.text}</Text>
    </Rectangle>
  );
};

const Text = styled.Text`
  font-size: 20px;
`

const Rectangle = styled.View`
  background-size: contain;
  background-color: white;
  width: 50%;
  border-radius: 100px;
  padding: 5%;
`


export default Plant;