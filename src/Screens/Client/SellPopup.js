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
import { reportSell } from "../../../Repository/UserData";

export default class SellPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: this.props.isModalVisible,
      modalOpened: false,
      dataLoading: false,
      sellPromoter: 0
      
    };
  }

  UNSAFE_componentWillUpdate() {
    this.state.isModalVisible = this.props.isModalVisible;
  }

  _promoterSell(meetingStatusNum){
    this.setState({ selectedButton: meetingStatusNum});
  }

  _sendMeetingStatus(){
    this.setState({ dataLoading: true});
    // reportSell(this.props.customerId, this.props.token, this.state.sellPromoter.toString())
    // .then(response => {
    //     this.setState({ dataLoading: false });
    //     if (response.Success) {
    //         ToastAndroid.show("הפעולה התבצעה בהצלחה!", ToastAndroid.SHORT);
    //       } else {
    //         ToastAndroid.show("הפעולה נכשלה", ToastAndroid.SHORT);
    //       }
    //       this.setState({ isModalVisible: false });
    //       this.props.client();
    // });
  }

  render() {
    return (
      <View>
        <Dialog
          visible={this.state.isModalVisible}
          title="דווח על מכירה"
          onTouchOutside={() => this.setState({ isModalVisible: false })}>
          <View>
            <Button
              block
              onPress={() => this._promoterSell(1)}
              style = {this.state.sellPromoter == 1 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.sellPromoter == 1 ? styles.selectedButtons : styles.buttons}> עצמאי </Text>
            </Button>

            <Button
              block
              onPress={() => this._promoterSell(2)}
              style = {this.state.sellPromoter == 2 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.sellPromoter == 2 ? styles.selectedButtons : styles.buttons}> קשרי לקוחות </Text>
            </Button>

            <Button
              block
              onPress={() => this._promoterSell(3)}
              style = {this.state.sellPromoter == 3 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.sellPromoter == 3 ? styles.selectedButtons : styles.buttons}> לידר </Text>
            </Button>

            <Button
              block
              onPress={() => this._promoterSell(4)}
              style = {this.state.sellPromoter == 4 ? styles.selectedButtonStyle: styles.buttonStyle}>
              <Text style = {this.state.sellPromoter == 4 ? styles.selectedButtons : styles.buttons}> נציג טלפוני </Text>
            </Button>

            <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>הזן סכום:</Text>

            <View style = {{flexDirection: 'row', alignSelf:'center', marginTop: 5}}>
                
                <TextInput
                    style={styles.editText}
                    editable={true}
                    placeholder="הקלד סכום לחידוש"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ renew: text })}
                    value={this.state.renew}/>
                <Text style = {{width: '20%', alignSelf:'center'}}>חידוש:</Text>
            </View>
            
            <View style = {{flexDirection: 'row', alignSelf:'center',  marginTop: 5}}>
                <TextInput
                    style={styles.editText}
                    editable={true}
                    placeholder="הקלד סכום מכירה חדשה"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ newSell: text })}
                    value={this.state.newSell}/>

                <Text style = {{width: '20%', alignSelf:'center'}}>חדש:</Text>
            </View>

            <View style = {{flexDirection: 'row', alignSelf:'center',  marginTop: 5}}>
                <TextInput
                    style={styles.editText}
                    editable={true}
                    placeholder="הקלד סכום הגדלה"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ newSell: text })}
                    value={this.state.newSell}/>

                <Text style = {{width: '20%', alignSelf:'center'}}>הגדלה:</Text>
            </View>

            {this.state.dataLoading ? (
              <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color={colors.accent}/>
            ) : null}

            
            <Button
                block
                style={styles.okButton}
                onPress={() => this._sendMeetingStatus()}>
                <Text> שלח </Text>
            </Button>
            
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
    backgroundColor: colors.white,
    color: colors.lightGray,
    padding: 10,
    width: '80%',
    borderColor: colors.lightGray,
    borderWidth: 1
  },
  popupButtons: {
    flexDirection: "row"
  },
  okButton: {
    padding: 10,
    color: colors.white,
    backgroundColor: colors.accent,
    marginTop: 20
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
