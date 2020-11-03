import React from 'react';
import { Button, } from 'react-native';
import { AuthRequest, } from 'expo-auth-session';

type AuthProps = {
  token: string;
  request: AuthRequest | null;
  onGrant: (token: string) => void;
}

function AuthButton({
  token,
  request,
  onGrant,
}: AuthProps) {
  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => onGrant(token)}
    />
  );
}

export default AuthButton;
