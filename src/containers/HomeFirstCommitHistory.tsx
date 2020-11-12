import React from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import { colors, } from '../lib/colors';

function HomeFirstCommitHistory() {  
  return (    
    <View style={styles.container}>
      <Text style={styles.text}>오늘의 첫 커밋 메세지</Text>
      <View style={styles.content}>
        <Text style={styles.contentText}>새기능 #32 로그인 페이지 구현</Text>
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
  text: {
    marginTop: 20,
    color: colors.main,
    fontWeight: 'bold',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: colors.main_alpha,    
    borderRadius: 3,
    margin: 5,
    marginTop: 10,
    width: Dimensions.get('screen').width  - 40,
    height: Dimensions.get('screen').height / 100 * 5,    
  },
  contentText: {
    color: colors.main,
    fontSize: 14,    
  },
});

export default HomeFirstCommitHistory;
