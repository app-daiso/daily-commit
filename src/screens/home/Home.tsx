import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ route, }: Props ) {
  const { token } = route.params;
  console.log(token);

  // TODO: 1. 사용자 이름 받아오기
  
  // TODO: 2. 사용자 커밋 받아오기

  // TODO: 3. 전체 커밋 현황 받아오기
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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
