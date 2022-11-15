import styled from "styled-components";

const StyleView = styled.View`
  background-color: #3C8D6870;
  align-items: center;
  padding: 5%;
  margin: 5%;
  border-radius: 30px;
`;

const StyleSafeAreaView = styled.SafeAreaView`
  display: flex;
  padding: 100%;
  height: 100%;
  background-color: #B6E0CE;
  justify-content: center;
`;

const WelcomeView = styled.View`
  background-color: #3C8D68;
  margin: 5%;
  padding: 5%;
  align-items: center;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const WelcomeText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22;
`;

const StyleInputView = styled.View`
  background-color: white;
  width: 95%;
  height: 40px;
  margin: 20px;
  border-radius: 5px;
  padding: 4%;
`;

const StyleSubmitView = styled.View`
  background-color: #3C8D68;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 40px;
  margin: 20px;
  border-radius: 30px;
`;

const SwapView = styled.View `
  background-color: #3C8D6870;
  align-items: center;
  margin: 5%;
  border-radius: 30px;
  padding: 5%;
`;

const SwapText = styled.Text `
  font-size: 22;
  font-weight: bold;
  color: white;
`;

export {
  StyleView,
  StyleSafeAreaView,
  WelcomeView,
  WelcomeText,
  StyleInputView,
  StyleSubmitView,  
  SwapText,
  SwapView,   
}