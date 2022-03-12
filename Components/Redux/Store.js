import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './Slices/CounterSlice';
import OrganizationReducer from "./Slices/OrganizationSlice"

// const initialState = {
//   counter: {
//     value: 0,
//   },
//   organization: {
//     users: [],
//   },
// };

const reducers = {
  counter: CounterReducer,
  organization: OrganizationReducer
};

const store = configureStore({reducer: reducers});

export default store;