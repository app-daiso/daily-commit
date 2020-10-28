import React, { useState, useEffect, } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, getDefaultReturnUrl, } from 'expo-auth-session';
import { StyleSheet, View, Button, } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';
import axios from "axios";

export type Props = StackScreenProps<RootStackParamList, 'Auth'>;

WebBrowser.maybeCompleteAuthSession();

// FIXME: 배포시에는 REDIRECT_URL 제거하고, native에 맞춰 수정
// 최종적으로는 development 모드에 따라 설정되게 짜놓는게 좋을 듯
const REDIRECT_URL = getDefaultReturnUrl() || makeRedirectUri({       
  native: 'comdailycommit://redirect',
});

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/7f6d75fe84b0b867318e',
};

export function AuthScreen({ navigation }: Props) {
  const [token, setToken] = useState(``);
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '7f6d75fe84b0b867318e',
      scopes: ['identity'],
      redirectUri: REDIRECT_URL,
    },
    discovery
  );
  
  useEffect(() => {
    if (response?.type === 'success') {
      const { code, state, } = response.params;
      const fetchData = async () => {
        const result = await axios.post(`https://github.com/login/oauth/access_token`, {
          client_id: `7f6d75fe84b0b867318e`,
          client_secret: `8eed00d78418028a9b507b229f50ab9581e55913`,
          code,
          redirect_uri: REDIRECT_URL,
          state,
        }, {
          headers: {
            accept: `application/json`,
          }
        });

        setToken(result.data.access_token);
      };

      fetchData();
    }
  }, [response]);

  useEffect(() => {
    console.log(`token`, token);
    if (token) {
      navigation.navigate(`Home`, {
        token,
      });
    }
  }, [token])  

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});