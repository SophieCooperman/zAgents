import React from "react";
import ReactDOM from "react-dom";
import {
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../../res/colors";
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

import colors from "../../../res/colors";
import { Dialog } from "react-native-simple-dialogs";
import { reportMeeting } from "../../../Repository/UserData";

export default class MeetingPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: this.props.isModalVisible,
      modalOpened: false,
      dataLoading: false,
      selectedButton: 0
      
    };
  }

  UNSAFE_componentWillUpdate() {
    this.state.isModalVisible = this.props.isModalVisible;
  }

  _meetingStatus(meetingStatusNum){
    this.setState({ selectedButton: meetingStatusNum});
  }

  _sendMeetingStatus(){
    this.setState({ dataLoading: true});
    reportMeeting(this.props.customerId, this.props.token, this.state.selectedButton.toString())
    .then(response => {
        this.setState({ dataLoading: false });
        if (response.Success) {
            ToastAndroid.show("הפעולה התבצעה בהצלחה!", ToastAndroid.SHORT);
          } else {
            ToastAndroid.show("הפעולה נכשלה", ToastAndroid.SHORT);
          }
          this.setState({ isModalVisible: false });
          this.props.client();
    });
  }

  render() {
    return (
      <View>
        <Dialog
          visible={this.state.isModalVisible}
          title="סטטוס פגישה"
          onTouchOutside={() => this.setState({ isModalVisible: false })}>
          <View>
            <Button
              block
              onPress={() => this._meetingStatus(1)}
              style = {this.state.selectedButton == 1 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.selectedButton == 1 ? styles.selectedButtons : styles.buttons}> התקיימה פגישה </Text>
            </Button>

            <Button
              block
              onPress={() => this._meetingStatus(2)}
              style = {this.state.selectedButton == 2 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.selectedButton == 2 ? styles.selectedButtons : styles.buttons}> לא התייקמה פגישה - עקב אילוצי לקוח </Text>
            </Button>

            <Button
              block
              onPress={() => this._meetingStatus(3)}
              style = {this.state.selectedButton == 3 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.selectedButton == 3 ? styles.selectedButtons : styles.buttons}> לא התקיימה פגישה עקב אילוצי נציג </Text>
            </Button>

            {this.state.dataLoading ? (
              <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color={colors.accent}/>
            ) : null}

            <View style={styles.popupButtons}>
              <Button
                transparent
                style={styles.cancelButton}
                onPress={() => this._sendMeetingStatus()}>
                <Text> אישור </Text>
              </Button>
            </View>
          </View>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  popupContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: "25%",
    justifyContent: "center"
  },
  editText: {
    backgroundColor: "white",
    color: colors.black,
    margin: 10,
    padding: 10
  },
  popupButtons: {
    flexDirection: "row"
  },
  okButton: {
    padding: 10,
    color: colors.white,
    backgroundColor: colors.accent
  },
  cancelButton: {
    padding: 10,
    color: colors.accent
  },
  text: {
    padding: 10,
    marginEnd: 10
  },
  titleText: {
    fontWeight: 20,
    padding: 10,
    marginEnd: 10,
    fontWeight: "bold"
  },
  activityIndicator: {
    margin: 10
  },
  buttons: {
    color: colors.primary
  },
  selectedButtons: {
    color: colors.white
  },
  buttonStyle: {
    backgroundColor: colors.lightGray,
    marginBottom: 10
  },
  selectedButtonStyle: {
    backgroundColor: colors.accent,
    marginBottom: 10
  }
});
