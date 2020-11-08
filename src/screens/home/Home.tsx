import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';
import Header from '../../containers/HomeHeader';
import TodayCommit from '../../containers/HomeTodayCommit';

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ route, }: Props ) {  
  // TODO: 2. 사용자 커밋 받아오기

  // TODO: 3. 전체 커밋 현황 받아오기
  
  return (
    <View style={styles.container}>
      <Header />
      <TodayCommit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
