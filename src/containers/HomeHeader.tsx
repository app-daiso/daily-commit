import React from 'react';
import { StyleSheet, } from 'react-native';
import { Header, Button, ThemeProvider, } from 'react-native-elements';
import { colors, } from '../lib/colors';

type Props = {
  userName: string;
}

function HomeHeader({
  userName,
}: Props) {  
  return (    
    <>      
      <Header 
        centerComponent={{ text: `${userName}`, style: { color: '#fff' } }} style={styles.header} containerStyle={{backgroundColor: colors.main, height: '10%', }}
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
        } 
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {    
    alignSelf: 'flex-start'    
  },
});

export default HomeHeader;
