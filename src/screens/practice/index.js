import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import HarryPotterRedux from '../../components/harryPotterRedux';
import Plants from '../../components/plants';
import UseEffectPractice from '../../components/useEffectPractice';

const Practice = ({navigation}) => {
  return (
    <SafeAreaView>
      <Plants />
    </SafeAreaView>
  );
};

export default Practice;
