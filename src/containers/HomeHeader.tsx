import React, { useEffect, } from 'react';
import { StyleSheet, } from 'react-native';
import { Header, Button, ThemeProvider, } from 'react-native-elements';
import { useDispatch, useSelector, } from 'react-redux';
import { getUserNameAsync, GithubUserNameState, GithubState, } from '../stores/github';
import { RootState, } from '../stores';
import { colors, } from '../lib/colors';

function HomeHeader() {  
  const accessToken = useSelector((state: RootState) => (state.github as GithubState).accessToken).data?.access_token;
  const { data, loading, error, } = useSelector((state: RootState) => (state.github as GithubUserNameState).userName);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserNameAsync.request({
      token: `Bearer ${accessToken}`,
    }));
  }, [accessToken,]);

  return (    
    <>      
      {loading && <Header centerComponent={{ text: '로딩 중...', style: { color: '#fff' } }} style={styles.header} containerStyle={{backgroundColor: colors.main, height: '10%', }} />}
      {error && <Header centerComponent={{ text: '에러 발생', style: { color: '#fff' } }} style={styles.header} containerStyle={{backgroundColor: colors.main, height: '10%', }} />}
      {data 
      && 
      <Header 
        centerComponent={{ text: `${data.name}님 안녕하세요!`, style: { color: '#fff' } }} style={styles.header} containerStyle={{backgroundColor: colors.main, height: '10%', }}
        rightComponent={
          <ThemeProvider
            theme={{
              Button: {
                titleStyle: {
                  color: colors.main_alpha,
                  fontSize: 12,
                }
              }
            }}
          >
            <Button
              title="로그아웃"
              type="clear"
            />
          </ThemeProvider>          
        } />
      }
    </>
  );
}

const styles = StyleSheet.create({
  header: {    
    alignSelf: 'flex-start'    
  },
});

export default HomeHeader;
