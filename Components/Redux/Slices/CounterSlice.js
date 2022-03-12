import {createSlice} from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    increment: state => {
        console.log("incrment called ", state);
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const {increment, decrement} = CounterSlice.actions;

export default CounterSlice.reducer;
