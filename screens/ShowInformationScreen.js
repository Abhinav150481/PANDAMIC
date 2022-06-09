import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem, Header, Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';

export default class ShowInformationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.navigation.getParam('items'),
      states: this.props.navigation.getParam('states'),
      itemList: [],
    };
  }

  getItemsDetails() {
    db.collection('information')
      .where('items', '==', this.state.items)
      .where('state', '==', this.state.states)
      .onSnapshot((snapshot) => {
        var itemList = snapshot.docs.map((doc) => doc.data());
        console.log(itemList);
        this.setState({
          itemList: itemList,
        });
      });
  }

  componentDidMount() {
    this.getItemsDetails();
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.contact}
        subtitle={item.number_of_items}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        // leftElement={
        //   // <Image
        //   //   style={{ height: 50, width: 50 }}
        //   //   source={{ uri: item.image_link }}
        //   // />
        // }
        // rightElement={
        //   <TouchableOpacity
        //     style={styles.button}
        //     onPress={() => {
        //       this.props.navigation.navigate('RecieverDetails', {
        //         details: item,
        //       });
        //     }}>
        //     <Text style={{ color: '#ffff' }}>View</Text>
        //   </TouchableOpacity>
        // }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: '#0FFFFF',
              fontSize: 20,
              fontWeight: 'bold',
              backgroundColor: '#00B2EE',
              alignSelf: 'center',
            }}>
            {this.state.items} State : {this.state.states}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          {this.state.itemList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>No Data in the Database</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.itemList}
              renderItem={this.renderItem}
            />
          )}
          
        </View>
       <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.props.navigation.navigate('Feedback')
            }}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
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
