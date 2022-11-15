import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SwapText, SwapView } from "../../config/theme";

const SwapLogButton = ({dest, value, direction}) => {

  navigation = useNavigation();

  var text;

  if (direction === "right") {
    text = value + "     " + String.fromCharCode(8594);
  } else if (direction === "left") {
    text = String.fromCharCode(8592) + "     " + value;
  }

  return (
    <SwapView>
      <TouchableOpacity onPress={() => navigation.navigate(dest)}>
        <SwapText> {text} </SwapText>
      </TouchableOpacity>
    </SwapView>
  )

  }

export default SwapLogButton;