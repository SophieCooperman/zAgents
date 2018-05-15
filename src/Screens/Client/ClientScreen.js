import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Modal,
  ToastAndroid
} from "react-native";
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
  Right
} from "native-base";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import colors from "../../../res/colors";
import CustomerCard from "../Opportunity/CustomerCard";
import { Icon } from "react-native-elements";
import PhoneIcon from "../../components/PhoneIcon";
import ActivatedAccount from "../../components/ActivatedAccount";
import EditEmailPopup from "./EditEmailPopup";
import SSOPopup from "./SSOPopup";
import BusinessPopup from "./BusinessPopup";
import MeetingPopup from "./MeetingPopup"
import SellPopup from "././SellPopup"



export default class ClientScreen extends React.Component {
  constructor(props) {
    super(props);
    this._updateEmail = this._updateEmail.bind(this);
    this.state = {
      // tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      // tableTitle: ['מספר לקוח', 'שם העסק', 'מספר טלפון', 'חטיבה', 'מוקצה', 'סטטוס'],
      tableData: null,
      emailModalVisibility: false,
      ssoModalVisibility: false,
      businessVisibility: false,
      locationVisibility: false,
      meetingVisibility: false,
      sellVisibility: false,
      email: null,
      token: null,
      customerId: null
    };
  }

  _updateEmail(newEmail) {
    const _this = this;
    _this.setState({ email: newEmail, emailModalVisibility: false });
    
  }


  _afterClosePopup(){
    this.state.ssoModalVisibility = false;
    this.state.businessVisibility = false;
    this.state.meetingVisibility = false;
    this.state.sellVisibility = false;
  }

  componentWillMount(){
    const { params } = this.props.navigation.state;
    this.state.tableData = [
      [params.customerData.CustomerID, "מספר לקוח"],
      [params.customerData.CustomerDetails.Name, "שם העסק"],
      [params.customerData.CustomerDetails.Phone, "מספר טלפון"],
      [params.customerData.CustomerDetails.BusinessUnit, "חטיבה"],
      [params.customerData.CustomerDetails.AssignedTo, "מוקצה"],
      [params.customerData.CustomerDetails.Status, "סטטוס"]
    ];
    this.state.email = params.customerData.PrimaryEmail;
    this.state.token = params.token;
    this.state.customerId = params.customerData.CustomerID;

  }
  render() {
    const { params } = this.props.navigation.state;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              style={{fontSize: 20, color: 'red'}}>
              <Icon name="menu"  />
            </Button>
          </Left>
          <Text style={styles.titleHeader}>
            {params.customerData.CustomerID +
              " - " +
              params.customerData.CustomerDetails.Name}
          </Text>
          <Right />
        </Header>
        <Content>
          <Card style={styles.card}>
            <CardItem bordered>
              <Body>
                <Text style={styles.cardTitle}>פרטי העסק</Text>
              </Body>
            </CardItem>

            <Table>
              <TableWrapper
                style={styles.tableWrapper}
                borderStyle={{ borderColor: "transparent", borderWidth: 0 }}
              >
                <Rows
                  data={this.state.tableData}
                  flexArr={[2, 1, 1]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </Card>

          <Card style={styles.card}>
            <CardItem button bordered onPress={() => this.setState({emailModalVisibility: true })}>
              <Left>
                <Text style={styles.clickableTxt}>עדכן</Text>
                <Right>
                  <Text style={styles.cardTitle}>דואר אלקטרוני</Text>
                </Right>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={styles.cardText}>{this.state.email}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem bordered>
              <Body>
                <Text style={styles.cardTitle}>NBO</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={styles.cardText}>
                  {params.customerData.NBOsDetails.Description}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem
              button
              bordered
              onPress={() => this.setState({ ssoModalVisibility: true })}
            >
              <Left>
                <Text style={styles.clickableTxt}>שיחזור פרטי התחברות</Text>
                <Right>
                  <Text style={styles.cardTitle}>SSO CRM</Text>
                </Right>
              </Left>
            </CardItem>

            <CardItem style={styles.card}>
              <Body>
                <ActivatedAccount
                  AccountCreated={params.customerData.SSO.AccountCreated}
                  AccountActivated={params.customerData.SSO.AccountActiveted}
                />
              </Body>
            </CardItem>
          </Card>

          {params.customerData.BusinessAppDetails.Show ? (
            <Card style={styles.card}>
            <CardItem
              button
              bordered
              onPress={() => this.setState({ businessVisibility: true })}
            >
              <Left>
                <Text style={styles.clickableTxt}>שליחת לינק להורדה</Text>
                <Right>
                  <Text style={styles.cardTitle}>אפליקציה לעסקים</Text>
                </Right>
              </Left>
            </CardItem>
            </Card>
          ) : null}

          <Card style={styles.card}>
          <CardItem
              button
              bordered
              onPress={() => this.setState({ locationVisibility: true })}
            >
              <Left>
                <Text style={styles.clickableTxt}>עדכן מיקום</Text>
                <Right>
                  <Text style={styles.cardTitle}>דיקור עסק</Text>
                </Right>
              </Left>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem bordered>
              <Body>
                <Text style={styles.cardTitle}>קהלים</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.cardText}>
                  {"הקהל מכיל לפחות " +
                    params.customerData.Audiences[0].PotentialNumber.toString() +
                    " גולשים"}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem 
              button
              bordered
              onPress={() => this.setState({ meetingVisibility: true })}
            >
              <Body>
                <Text style={styles.cardTitle}>דווח על פגישה</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.lastCard}>
            <CardItem 
              button
              bordered
              onPress={() => this.setState({ sellVisibility: true })}>
              <Body>
                <Text style={styles.cardTitle}>דווח על מכירה</Text>
              </Body>
            </CardItem>
          </Card>

          
        </Content>

        <PhoneIcon phoneNumber={params.customerData.CustomerDetails.Phone} />

        {this.state.emailModalVisibility ? (
          <EditEmailPopup
            isModalVisible={this.state.emailModalVisibility}
            existingEmail={params.customerData.PrimaryEmail}
            client={this._updateEmail}
            customerId = {this.state.customerId}
            token = {this.state.token}
          />
        ) : null}

        {this.state.ssoModalVisibility ? (
          <SSOPopup
            isModalVisible={this.state.ssoModalVisibility}
            client={this._afterClosePopup.bind(this)}
          />
        ) : null}


        {this.state.businessVisibility ? (
          <BusinessPopup
            isModalVisible={this.state.businessVisibility}
            client={this._afterClosePopup.bind(this)}
            customerId = {this.state.customerId}
            token = {this.state.token}
          />
        ) : null}

        {this.state.meetingVisibility ? (
          <MeetingPopup
            isModalVisible={this.state.meetingVisibility}
            client={this._afterClosePopup.bind(this)}
            customerId = {this.state.customerId}
            token = {this.state.token}
          />
        ) : null}

        {this.state.sellVisibility ? (
          <SellPopup
            isModalVisible={this.state.sellVisibility}
            client={this._afterClosePopup.bind(this)}
            customerId = {this.state.customerId}
            token = {this.state.token}
          />
        ) : null}
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    
  },
  icon: {
    color: colors.white
  },
  titleHeader: {
    color: "white",
    alignSelf: "center"
  },
  container: {
    backgroundColor: colors.lightGray,
    textAlign: "right"
  },
  customCard: {
    backgroundColor: "white",
    padding: 10
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    writingDirection: "rtl",
    alignSelf: "flex-end"
  },
  cardText: {
    alignSelf: "flex-end",
    marginBottom: 5,
    writingDirection: "rtl",
    textAlign: "right"
  },
  card: {
    marginBottom: 10,
    textAlign: "right"
  },
  lastCard:{
    marginBottom: 50,
    textAlign: "right"
  },
  row: { height: 28 },
  text: { textAlign: "right" },
  title: { flex: 1 },
  tableWrapper: {
    flexDirection: "row",
    writingDirection: "rtl",
    justifyContent: "flex-end",
    padding: 10,
    margin: 10
  },
  table: {
    borderColor: "#efebe9",
    color: "#efebe9",
    backgroundColor: "#efebe9"
  },
  clickableTxt: {
    color: colors.accent
  }



});
