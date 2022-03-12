import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {addUsers} from './Redux/Slices/OrganizationSlice';

const styles = StyleSheet.create({
  inputBar: {
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

const Users = props => {
  const [name, onChangeName] = useState('');
  const onAdd = e => {
    //   console.log("add", e.target.value);
    props.dispatch(addUsers({name}));
  };

  return (
    <View style={{}}>
      <TextInput
        value={name}
        style={styles.inputBar}
        placeholder="Enter Person Name"
        onChangeText={value => {
          //   console.log('add', e, e.target);
          onChangeName(value);
        }}
      />
      <Button title="Add to List" onPress={onAdd} />
      <ScrollView
        style={{
          borderColor: 'black',
          borderWidth: 2,
          //   borderBottomWidth: 10,
          height: '79%',
        }}>
        {props.users.map((user, ind) => {
          return (
            <View
              key={ind}
              style={{
                margin: 2,
                padding: 2,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Text>
                {user.name}
                {ind}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = store => {
  console.log('mapStateToProps store', store);
  return {
    users: store.organization.users,
  };
};

export default connect(mapStateToProps)(Users);
