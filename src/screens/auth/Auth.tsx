import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View, Text, } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';
import GithubLogin from '../../containers/GithubLogin';

export type Props = StackScreenProps<RootStackParamList, 'Auth'>;

WebBrowser.maybeCompleteAuthSession();

export function AuthScreen() {  
  return (
    <View style={styles.container}>
      <Text>로그인 화면</Text>
      <GithubLogin />
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