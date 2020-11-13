import React, { useEffect, } from 'react';
import { makeRedirectUri, useAuthRequest, getDefaultReturnUrl, } from 'expo-auth-session';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigation, } from '@react-navigation/native';
import { RootState, } from '../stores';
import AuthButton from '../components/AuthButton';
import { GithubState, postAccessTokenAsync, } from '../stores/github';
import { Text, } from 'react-native';

const REDIRECT_URL = getDefaultReturnUrl() || makeRedirectUri({       
  native: 'comdailycommit://redirect',
});

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/7f6d75fe84b0b867318e',
};

function GithubLoginContainer() {
  const navigation = useNavigation();
  const { data, loading, error, } = useSelector((state: RootState) => (state.github as GithubState).accessToken);
  const dispatch = useDispatch();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '7f6d75fe84b0b867318e',
      scopes: ['read:org,', 'repo'],
      redirectUri: REDIRECT_URL,
    },
    discovery,
  );

  useEffect(() => {
    const token = data?.access_token;

    if (token) {
      navigation.navigate(`Home`, {
        token,
      });
    }
  });  

  useEffect(() => {
    if (response?.type === 'success') {
      const { code, state, } = response.params;      

      dispatch(postAccessTokenAsync.request({
        code,
        state,
      }));
    }
  }, [response]);  

  return (
    <>
      <AuthButton 
        eventPress={() => promptAsync()}
        disabled={request}
      />
      {loading && <Text style={{ textAlign: 'center' }}>로딩 중..</Text>}
      {error && <Text style={{ textAlign: 'center' }}>에러 발생</Text>}
      {data && <Text style={{ textAlign: 'center' }}>토큰 = {data.access_token}</Text>}
    </>
  );
}

export default GithubLoginContainer;
