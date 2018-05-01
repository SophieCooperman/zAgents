import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import {Button, Text, Container, Card, CardItem, Body, Content,  Header, Title, Left, Icon, Right} from "native-base";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class ClientScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      tableTitle: ['מספר לקוח', 'שם העסק', 'מספר טלפון', 'חטיבה', 'מוקצה', 'סטטוס'],
      tableData: null
    }
  }


  render() {
    const { params } = this.props.navigation.state;
    this.setState({tableData: [[params.customerData.CustomerID],
                              [params.customerData.CustomerDetails.Name],
                              [params.customerData.CustomerDetails.Phone],
                              [params.customerData.CustomerDetails.BusinessUnit]
                              [params.customerData.CustomerDetails.AssignedTo]
                              ['blabla']]});
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

            <Table>
              {/* <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/> */}
              <TableWrapper style={styles.wrapper}>
                <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
              </TableWrapper>
            </Table>


            {/* <Body>
                <Text style = {styles.cardText}>{'מספר לקוח:' + params.customerData.CustomerID}</Text>
                <Text style = {styles.cardText}>{'שם העסק:' + params.customerData.CustomerDetails.Name}</Text>
              </Body> */}
            </CardItem>
          </Card>

          <Card style = {styles.card}>
            <CardItem bordered>
              
                <Text style = {styles.cardTitle}>דואר אלקטרוני</Text>
              
            </CardItem>
          
            <CardItem>
              <Body>
              <Text style = {styles.cardText}>{params.customerData.PrimaryEmail}</Text>
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
    textAlign:'right'
  },
  customCard: {
    backgroundColor: 'white',
    padding: 10
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    writingDirection: 'rtl',
    alignSelf: 'flex-end'
  },
  cardText: {
    alignSelf: 'flex-end',
    marginBottom: 5,
    writingDirection: 'rtl'
  },
  card:{
    marginBottom: 10,
    textAlign:'right'
  },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  wrapper: { flexDirection: 'row' },
});