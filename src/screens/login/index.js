import React, { useContext, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Dimensions } from "react-native";
import FormInput from "../../components/formInput";
import FormSubmit from "../../components/formSubmit";
import SwapLogButton from "../../components/swapLogButton";
import { AuthContext, AuthProvider } from "../../config/authProvider";
import { StyleSafeAreaView, StyleView, WelcomeText, WelcomeView } from "../../config/theme";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);

  return (
    <StyleSafeAreaView>
      <WelcomeView>
        <WelcomeText> Welcome in Green Memory ! </WelcomeText>
      </WelcomeView>
      <StyleView>
        <FormInput 
          value="email" 
          placeholder="addresse e-mail"
          onChangeText={userEmail => setEmail(userEmail)}
        />
        <FormInput 
          value="password" 
          placeholder="mot de passe" 
          onChangeText={userPwd => setPassword(userPwd)} 
          secureTextEntry={true} 
        />
        <FormSubmit value="Envoyer" onPress={() => login(email, password)} />
      </StyleView>
      <SwapLogButton dest="register" value="Pas de compte ?" direction="right" />
    </StyleSafeAreaView>
  )
}

export default Login;