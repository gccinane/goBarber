import React from 'react';
import {View, Text} from 'react-native';
import Background from '~/components/Background';
import Input from '~/components/Input';

const SignIn = () => {
  return (
    <Background>
      <>
        <Text>sign up</Text>
        <Input style={{marginTop: 38}} icon="call" placeholder="digite nome" />
      </>
    </Background>
  );
};

export default SignIn;
