import React from 'react';
import {View, Text} from 'react-native';
import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

const SignIn = () => {
  return (
    <Background>
      <Text>sign up</Text>
      <Input style={{marginTop: 38}} icon="call" placeholder="digite nome" />
      <Button>Entrar</Button>
    </Background>
  );
};

export default SignIn;
