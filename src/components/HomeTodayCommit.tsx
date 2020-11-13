import React from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import { colors, } from '../lib/colors';

type Props = {
  count: number;
}

function HomeTodayCommit({
  count,
}: Props) {  
  return (    
    <View style={styles.container}>
      <Text style={styles.titleText}>오늘 커밋 현황</Text>
      <View style={styles.content}>
        <Text style={styles.contentText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  
  },
  titleText: {
    marginTop: 10,
    color: colors.main,
    fontWeight: 'bold',
  },
  content: {
    display: 'flex',
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.success,    
    borderRadius: 3,
    padding: 5,
    marginTop: 10,
    width: Dimensions.get('screen').height / 100 * 8,
    height: Dimensions.get('screen').height / 100 * 8,
  },
  contentText: {
    color: colors.sub,
    fontSize: 20,
  },
});

export default HomeTodayCommit;
