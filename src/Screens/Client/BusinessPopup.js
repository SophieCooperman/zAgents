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
import {sendBusinessAppLink} from "../../../Repository/UserData"

export default class BusinessPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: this.props.isModalVisible,
      modalOpened: false,
      dataLoading: false
    };
  }

 

  UNSAFE_componentWillUpdate(){
    this.state.isModalVisible = this.props.isModalVisible;
  }



  _updateBusiness(){
    this.setState({dataLoading: true});
    sendBusinessAppLink(this.props.customerId, this.props.token)
    .then(response => {
      this.setState({dataLoading: false});
      if(response.Success){
        ToastAndroid.show('הפעולה התבצעה בהצלחה!', ToastAndroid.SHORT);
      }else{
        ToastAndroid.show('הפעולה נכשלה', ToastAndroid.SHORT);
      }
      this.setState({ isModalVisible: false });
      this.props.client();
    })
    
  }

  render() {

    return (

      <View>
        <Dialog
          visible={this.state.isModalVisible}
          onTouchOutside={() => this.setState({isModalVisible: false})}>
          <View>
          <Text style={styles.titleText}>אפליקציה לעסקים</Text>
          <Text style={styles.text}>האם ברצונך לשלוח לינק להורדת אפליקציה?</Text>
          {this.state.dataLoading ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="large"
              color={colors.accent}
            />
          ) : null}
            <View style={styles.popupButtons}>
              <Button
                transparent
                style={styles.cancelButton}
                onPress={() => this.setState({isModalVisible: false})}>
                <Text> ביטול </Text>
              </Button>

              <Button
                style={styles.okButton}
                onPress={() => this._updateBusiness()}>
                <Text> שלח </Text>
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
    color: colors.accent,
    
  },
  text: {
    padding: 10,
    marginEnd: 10,
    
  },
  titleText: {
    fontWeight: 20,
    padding: 10,
    marginEnd: 10,
    fontWeight: 'bold'
  },
  activityIndicator: {
    margin:10
  },
});

