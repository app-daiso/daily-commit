import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';
import HomeHeader from '../../containers/HomeHeader';

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ route, }: Props ) {  
  // TODO: 2. 사용자 커밋 받아오기

  // TODO: 3. 전체 커밋 현황 받아오기
  
  return (
    <View style={styles.container}>
      <HomeHeader />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
