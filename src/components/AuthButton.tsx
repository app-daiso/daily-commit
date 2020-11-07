import React from 'react';
import { Button, } from 'react-native';
import { AuthRequest, } from 'expo-auth-session';

type AuthProps = {
  disabled: AuthRequest | null;
  eventPress: () => void;
}

function AuthButton({
  disabled,
  eventPress,
}: AuthProps) {
  return (
    <Button
      disabled={!disabled}
      title="Login"
      onPress={() => eventPress()}
    />
  );
}

export default AuthButton;
