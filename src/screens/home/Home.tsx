import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';
import Header from '../../containers/HomeHeader';
import TodayCommit from '../../containers/HomeTodayCommit';
import FirstCommitHistory from '../../containers/HomeFirstCommitHistory';
import AllCommitList from '../../containers/HomeAllCommitList';
import Setting from '../../containers/HomeSetting';

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ route, }: Props ) {    
  return (
    <View style={styles.container}>
      <Header />
      <TodayCommit />
      <FirstCommitHistory />
      <AllCommitList />
      <Setting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',    
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
});
