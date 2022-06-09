import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class FeedbackScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: '',
      reason: '',
    };
  }

  addFeedback = () => {
    // add form details in db
    db.collection('all_feedback').add({
      feedback: this.state.feedback,
      reason: this.state.reason,
    });
  };

  setStateValue = (itemValue) => {
    this.setState({ feedback: itemValue });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="FeedBack" />
        <View style={{ flex: 1 }}>
          <Picker
            style={styles.formTextInput}
            onValueChange={this.setStateValue}
            selectedValue={this.state.feedback}>
            <Picker.Item label="Give Your Feedback" value="0" />
            <Picker.Item label="Genuine Number" value="Genuine" />
            <Picker.Item label="Not the number i want" value="Wrong Number" />
            <Picker.Item label="Fake(Report)" value="Fake" />
            <Picker.Item label="Other" value="Other" />
          </Picker>

          <TextInput
            style={styles.formTextInput}
            placeholder={'Reason if Fake or Other'}
            value={this.state.reason}
            onChangeText={(text) => {
              this.setState({
                reason: text,
              });
            }}
          />

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.addFeedback();
            }}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: '#000080',
    fontFamily: 'comic-sans',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#000080',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#87CEEB',
    margin: 50,
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: '75%',
    height: 55,
    alignSelf: 'center',
    borderColor: '#87CEEB',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  registerButtonText: {
    color: '#000080',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#000080',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20,
  },
});
