import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Modal
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

export default class ClientScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      // tableTitle: ['מספר לקוח', 'שם העסק', 'מספר טלפון', 'חטיבה', 'מוקצה', 'סטטוס'],
      tableData: null,
      dataa: [["1", "2"]],
      emailModalVisibility: false,
      ssoModalVisibility: false,
      email: null
    };
  }

  _editEmail() { this.setState({ emailModalVisibility: true });}

  _updateEmail(newEmail) {
    ///?????????????
    this.setState({ email: newEmail });
    this.state.email = newEmail;
    console.log(newEmail);
  }
  
  _resetConnectionData() { this.setState({ ssoModalVisibility: true });}

  _resetData(){

  }

  

  render() {
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
            <CardItem button bordered onPress={() => this._editEmail()}>
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
              onPress={() => this._resetConnectionData()}
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
              <CardItem bordered>
                <Body>
                  <Text style={styles.cardTitle}>אפליקציה לעסקים</Text>
                </Body>
              </CardItem>
            </Card>
          ) : null}

          <Card style={styles.card}>
            <CardItem bordered>
              <Body>
                <Text style={styles.cardTitle}>דיקור עסק</Text>
              </Body>
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
            <CardItem bordered button>
              <Body>
                <Text style={styles.cardTitle}>דווח על פגישה</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem bordered button>
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
            client={this._updateEmail.bind(this)}
          />
        ) : null}


        {this.state.emailModalVisibility ? (
          <SSOPopup
            isModalVisible={this.state.emailModalVisibility}
            client={this._resetData.bind(this)}
          />
        ) : null}

        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary
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