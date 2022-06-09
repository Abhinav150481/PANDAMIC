import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';
import ShowInformationScreen from './ShowInformationScreen';
import {Header,Icon} from 'react-native-elements';

export default class RequestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      // district: '',
      items: '',
      states: '',
    };
  }

  allRequests = () => {
    db.collection('all_requests').add({
      // district: this.state.district,
      items: this.state.items,
      state: this.state.states,
    });
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
         <MyHeader title="Request Items" navigation ={this.props.navigation}/>
          <Picker
            style={styles.formTextInput}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                items: itemValue,
              })
            }>
            <Picker.Item label="Choose Your Item" value="0" />
            <Picker.Item label="Oxygen" value="Oxygen" />
            <Picker.Item label="Ventilators" value="Ventilators" />
            <Picker.Item label="Beds" value="Beds" />
            <Picker.Item label="Blood" value="Blood" />
            <Picker.Item label="Medicines" value="Medicines" />
          </Picker>

          <Picker
            style={styles.formTextInput}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                states: itemValue,
              })
            }>
            <Picker.Item label="Choose Your State" value="0" />
            <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
            <Picker.Item label="Arunachal Pradesh" value="Arunachal Pradesh" />
            <Picker.Item label="Assam" value="Assam" />
            <Picker.Item label="Bihar" value="Bihar" />
            <Picker.Item label="Chattisgarh" value="Chattisgarh" />
            <Picker.Item label="Delhi" value="Delhi" />
            <Picker.Item label="Goa" value="Goa" />
            <Picker.Item label="Gujrat" value="Gujrat" />
            <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
            <Picker.Item label="Jharkhand" value="Jharkhand" />
            <Picker.Item label="Karnataka" value="Karnataka" />
            <Picker.Item label="Kerela" value="Kerela" />
            <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
            <Picker.Item label="Manipur" value="Manipur" />
            <Picker.Item label="Meghalya" value="Meghalya" />
            <Picker.Item label="Mizoram" value="Mizoram" />
            <Picker.Item label="Nagaland" value="Nagaland" />
            <Picker.Item label="Odisha" value="Odisha" />
            <Picker.Item label="Punjab" value="Punjab" />
            <Picker.Item label="Rajasthan" value="Rajasthan" />
            <Picker.Item label="Sikkim" value="Sikkim" />
            <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
            <Picker.Item label="Telangana" value="Telangana" />
            <Picker.Item label="Tripura" value="Tripura" />
            <Picker.Item label="Uttrakhand" value="Uttrakhand" />
            <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
            <Picker.Item label="West Bengal" value="West Bengal" />
          </Picker>

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.props.navigation.navigate('InformationList', {
                items: this.state.items,
                states: this.state.states,
              });
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
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
