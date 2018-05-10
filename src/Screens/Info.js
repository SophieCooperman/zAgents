import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../res/colors";
import {
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class Info extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>אודות</Title>
          </Body>
          <Right />
        </Header>
        {/* <Content> */}
          <View style={styles.headerContent}>
            <Text style={styles.topText}> גרסה 1.5.1.2</Text>
            <Text style={styles.footer}>
              Icons made by Freepik from www.flaticon.com is licensed by CC 3.0
              BY
            </Text>
          </View>
        {/* </Content> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // height: '100%'
  },
  headerContent: {
    
    height: '100%',
    width: '100%',    
  },
  header: {
    backgroundColor: colors.primary
    
  },
  topText: {
    padding: 10,
    
    width:'100%',
    textAlign: 'center',
    

  },
  footer: {
    padding: 10,
    bottom: 60,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',

  }
});
