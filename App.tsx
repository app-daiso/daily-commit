import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as firebase from 'firebase';
import { makeRedirectUri, useAuthRequest, getDefaultReturnUrl, } from 'expo-auth-session';
import { StyleSheet, View, Button, } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

// FIXME: 배포시에는 REDIRECT_URL 제거하고, native에 맞춰 수정
// 최종적으로는 development 모드에 따라 설정되게 짜놓는게 좋을 듯

const REDIRECT_URL = getDefaultReturnUrl();
const firebaseConfig = {
  apiKey: "AIzaSyCPb5d46YfLqY4mdaQJHRKMum_oMU-6T40",
  authDomain: "dailycommit-cd5a0.firebaseapp.com",
  databaseURL: "https://dailycommit-cd5a0.firebaseio.com",
  projectId: "dailycommit-cd5a0",
  storageBucket: "dailycommit-cd5a0.appspot.com",
  messagingSenderId: "330023374467",
  appId: "1:330023374467:web:1a8d6e29fb5099bfaf55b6",
  measurementId: "G-MF6HZ4RCQ4"
};

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/7f6d75fe84b0b867318e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '7f6d75fe84b0b867318e',
      scopes: ['identity'],
      redirectUri: REDIRECT_URL || makeRedirectUri({       
        // For usage in bare and standalone
        native: 'comdailycommit://redirect',
      }),
    },
    discovery
  );
  
  React.useEffect(() => {
    console.log(response);
    if (response?.type === 'success') {
      const { code } = response.params;

      console.log(code);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login TEST"
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
