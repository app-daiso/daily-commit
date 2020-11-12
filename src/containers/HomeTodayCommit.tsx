import React, { useEffect, } from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
// import { useDispatch, useSelector, } from 'react-redux';
// import { getUserNameAsync, GithubUserNameState, GithubState, } from '../stores/github';
// import { RootState, } from '../stores';
import { colors, } from '../lib/colors';

function HomeTodayCommit() {  
  // const accessToken = useSelector((state: RootState) => (state.github as GithubState).accessToken).data?.access_token;
  // const { data, loading, error, } = useSelector((state: RootState) => (state.github as GithubUserNameState).userName);
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getUserNameAsync.request({
  //     token: `Bearer ${accessToken}`,
  //   }));
  // }, [accessToken,]);

  return (    
    <View style={styles.container}>
      <Text style={styles.titleText}>오늘 커밋 현황</Text>
      <View style={styles.content}>
        <Text style={styles.contentText}>1</Text>
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
