import React, { useContext, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { StyleSafeAreaView, StyleView, WelcomeText, WelcomeView } from "../../config/theme";
import FormInput from "../../components/formInput";
import FormSubmit from "../../components/formSubmit";
import SwapLogButton from "../../components/swapLogButton";

import { AuthContext } from "../../config/authProvider";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");

  // const {register} = useContext(AuthContext);

  return (
    <StyleSafeAreaView>
      <SwapLogButton dest="login" value="Déjà un compte ?" direction="left" />
      <StyleView>
        <FormInput 
          value="name" 
          placeholder="name" 
          onChangeText={userName => setName(userName)} 
        />
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
        <FormInput 
          value="verif_password" 
          placeholder="confirmer votre mot de passe" 
          onChangeText={verPwd => setVerifPassword(verPwd)} 
          secureTextEntry={true} 
        />
        <FormSubmit 
          value="Envoyer" 
        />
        {/* <FormSubmit 
          value="Envoyer" 
          onPress={() => register(email, password)}
        /> */}
      </StyleView>
    </StyleSafeAreaView>
  )
}

export default Register;