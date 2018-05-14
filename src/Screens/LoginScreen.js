import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
  ActivityIndicator,
  AsyncStorage
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
  Icon,
  Right
} from "native-base";

import { sendLoginDetails } from "../../Repository/UserData";

import { TextInputMask } from "react-native-masked-text";
import Colors from "../../res/colors";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      loadingToken: true
    };
  }


  componentDidMount() {
    AsyncStorage.getItem("agentToken")
    .then (token => {
      if (token != null) {
        this.props.navigation.navigate("Main");
      }else{
        this.setState({loadingToken:false})
      }
    }).catch (error => {
      console.log(error.message);
    });
  
  }

   _login() {
    const _this = this;

    sendLoginDetails(this.state.userName, this.state.password).then(data => {
      if (data.access_token != undefined) {
        try {
          AsyncStorage.setItem("agentToken", data.access_token);
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
        }
        this.props.navigation.navigate("Main");
      }
      _this.setState({
        rawJson: data,
        token: data.access_token
      });
    });
  }

  renderLoginScreen = () => {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Title>התחברות</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.headerContent}>
            <TextInput
              style={styles.editText}
              editable={true}
              placeholder="שם משתמש"
              placeholderTextColor={Colors.colorHint}
              onChangeText={text => this.setState({ userName: text })}
              value={this.state.userName}
            />

            <TextInput
              secureTextEntry={true}
              style={styles.editText}
              editable={true}
              placeholder="סיסמה"
              placeholderTextColor={Colors.colorHint}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />

            <Button
              block
              style={this.state.userName != "" && this.state.password != "" ? styles.activeButtonStyle : styles.buttonStyle}
              onPress={() => this._login()}
            >
              <Text style={styles.buttonText}> התחבר </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  renderLoadingIcon = () => {
    <View>
    <ActivityIndicator
      style={styles.activityIndicator}
      size="large"
      color={Colors.accent}
    />
    </View>
  }

  render() {
    
    return (
      <View style = {{backgroundColor: Colors.red, width: '100%', height: '100%'}}>
        {this.loadingToken ? this.renderLoadingIcon() : this.renderLoginScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray
  },
  header: {
    backgroundColor: Colors.primary
  },
  headerContent: {
    flexDirection: "column"
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    padding: 10,
    margin: 10
  },
  activeButtonStyle: {
    backgroundColor: Colors.accent,
    color: Colors.white,
    padding: 10,
    margin: 10
  },
  buttonText: {
    fontSize: 17,
    textAlign: "center",
    color: Colors.white
  },
  editText: {
    margin: 10,
    padding: 10,
    color: Colors.accent,
    textAlign: "right"
  },
  activityIndicator: {
    flex: 1,
    margin: 40,
    width: '100%',
    height: '100%'
  },
});
