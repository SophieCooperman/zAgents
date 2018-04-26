import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import {
  Button,
  Text,
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

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style = {styles.container}>
        <Header style = {styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Zap Agents</Title>
          </Body>
          <Right />
        </Header>
         <Content>
          <Card style = {styles.card}>
            <CardItem bordered>
                <Text style = {styles.cardTitle}>פרטי העסק</Text>
              
            </CardItem>
            <CardItem>
            <Body>
                <Text style = {styles.cardText}>מספר לקוח:</Text>
                <Text style = {styles.cardText}>שם העסק:</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style = {styles.card}>
            <CardItem bordered>
              
                <Text style = {styles.cardTitle}>דואר אלקטרוני</Text>
              
            </CardItem>
          
            <CardItem>
              <Body>
              <Text style = {styles.cardText}>blabla@gmail.com</Text>
              </Body>
            </CardItem>
          </Card>

           <Card style = {styles.card}>
            <CardItem bordered>
                <Text style = {styles.cardTitle}>NBO</Text>
            </CardItem>
          
            <CardItem>
              <Body>
              <Text style = {styles.cardText}>blabla@gmail.com</Text>
              </Body>
            </CardItem>
          </Card>

           <Card style = {styles.card}>
            <CardItem bordered>
                <Text style = {styles.cardTitle}>SSO CRM</Text>
            </CardItem>
          
            <CardItem style = {styles.card}>
              <Body>
              <Text style = {styles.cardText}>blabla@gmail.com</Text>
              </Body>
            </CardItem>
          </Card> 


           <Card style = {styles.card}>
            <CardItem bordered>
                <Text style = {styles.cardTitle}>אפליקציה לעסקים</Text>
            </CardItem>
          </Card>

        </Content> 
      </Container>
    );
  }
}




const styles = StyleSheet.create({
  header: {
    backgroundColor: '#bcaaa4',
  },
  container: {
    backgroundColor: '#efebe9',
  },
  customCard: {
    backgroundColor: 'white',
    padding: 10
  },
  cardTitle: {
    textAlign : 'center',
    fontWeight: 'bold',
    marginBottom: 5,
    writingDirection: 'rtl'
  },
  cardText: {
    textAlign: 'right',
    marginBottom: 5,
    writingDirection: 'rtl'
  },
  card:{
    marginBottom: 10
  }
});