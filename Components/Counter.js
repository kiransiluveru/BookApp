import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Text, View, ScrollView, Button} from 'react-native';
import {decrement, increment} from './Redux/Slices/CounterSlice';

const Counter = props => {
  const onPressButton = operator => {
    if (operator === '+') {
      props.dispatch(increment());
    } else {
      props.dispatch(decrement());
    }
  };
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      >
        <Button title={'Increment'} onPress={() => onPressButton('+')} />
        <Text>{props.value}</Text>
        <Button title={'Decrement'} onPress={() => onPressButton('-')} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = store => {
//   console.log('mapStateToProps store', store);
  return {
    value: store.counter.value,
  };
};

export default connect(mapStateToProps)(Counter);
