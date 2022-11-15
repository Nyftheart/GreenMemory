import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSubmitView } from "../../config/theme";

const FormSubmit = ({value, ...rest}) => {
  return (
    <StyleSubmitView>
      <TouchableOpacity 
        {...rest} 
      >
        <Text> {value} </Text>
      </TouchableOpacity>
    </StyleSubmitView>
  )
}

export default FormSubmit;