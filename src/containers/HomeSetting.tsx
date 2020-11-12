import React from 'react';
import { StyleSheet, View, Dimensions, } from 'react-native';
import { Container, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { colors, } from '../lib/colors';

function HomeSetting() {  
  return (    
    <View style={styles.container}>
      <Text style={styles.text}>설정</Text>
      
      <Container style={{
        width: '100%',
      }}>
        <Content>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: colors.main }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
              <Text>푸쉬 알림</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: colors.main }}>
                <Icon active name="grid" />
              </Button>
            </Left>
            <Body>
              <Text>위젯</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="repeat" />
              </Button>
            </Left>
            <Body>
              <Text>간격 마다 알림</Text>
            </Body>
            <Right>
              <Text>1시간 마다</Text>
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="alarm" />
              </Button>
            </Left>
            <Body>
              <Text>특정 시간 알림</Text>
            </Body>
            <Right>
              <Text>23:00:00</Text>
            </Right>
          </ListItem>
          
        </Content>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
  },
  text: {
    marginTop: 10,
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

export default HomeSetting;
