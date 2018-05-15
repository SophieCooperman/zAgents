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
  ToastAndroid
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
import {updateEmail} from "../../../Repository/UserData"

export default class EditEmailPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: this.props.isModalVisible,
      email: this.props.existingEmail,
      modalOpened: false,
      wrongEmailVisibility: false
    };
  }

  UNSAFE_componentWillUpdate() {
    this.state.isModalVisible = this.props.isModalVisible;
  }

  _updateEmail() {
    updateEmail(this.props.customerId, this.state.email, this.props.token)
    .then(response => {
      if(response.Success){
        ToastAndroid.show('הפעולה התבצעה בהצלחה!', ToastAndroid.SHORT);
        this.setState({ isModalVisible: false });
        this.props.client(this.state.email);
      }else{
        this.setState({wrongEmailVisibility: true});
      }
    })
    
  }

  render() {
    return (
      // <View>
      //   <Modal isVisible={this.state.isModalVisible}>
      //     <View style={styles.popupContainer}>
      //       <Text style={styles.text}>עדכון דואר אלקטרוני</Text>
      //       <TextInput
      //         style={styles.editText}
      //         editable={true}
      //         placeholder="הקלד את כתובת המייל החדשה שלך כאן"
      //         underlineColorAndroid={colors.accent}
      //         onChangeText={text => this.setState({ email: text })}
      //         value={this.state.email}
      //       />

      //       <View style={styles.popupButtons}>
      //         <Button transparent style={styles.cancelButton} onPress={() => this._closeModal()}>
      //           <Text> ביטול </Text>
      //         </Button>
      //         <Button style={styles.okButton} onPress={() => this._closeModal()}>
      //           <Text> עדכן </Text>
      //         </Button>
      //       </View>
      //     </View>
      //   </Modal>
      // </View>

      <View>
        <Dialog
          visible={this.state.isModalVisible}
          onTouchOutside={() => this.setState({isModalVisible: false})}>
          <View>
            <Text style={styles.text}>עדכון דואר אלקטרוני</Text>
            <TextInput
              style={styles.editText}
              editable={true}
              placeholder="הכנס דואר אלקטרוני חדש"
              underlineColorAndroid={colors.accent}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}/>

             {this.state.wrongEmailVisibility? <Text style={styles.wrongEmail}>דואר אלקטרוני לא תקין</Text> : null}

            <View style={styles.popupButtons}>
              <Button
                transparent
                style={styles.cancelButton}
                onPress={() => this.setState({isModalVisible: false})}>
                <Text> ביטול </Text>
              </Button>

              <Button
                style={styles.okButton}
                onPress={() => this._updateEmail()}>
                <Text> עדכן </Text>
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
    marginEnd: 10,
    fontWeight: "bold"
  },
  wrongEmail: {
    color: colors.red
  }
});
