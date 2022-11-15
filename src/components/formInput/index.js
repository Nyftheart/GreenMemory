import React from "react";
import { TextInput, View } from "react-native";
import { StyleInputView } from "../../config/theme";

const FormInput = ({value, placeholder, ...rest}) => {

  return (
    <StyleInputView>
      <TextInput
        placeholder={placeholder}
        {...rest}
      />
    </StyleInputView>
  )
}

export default FormInput;