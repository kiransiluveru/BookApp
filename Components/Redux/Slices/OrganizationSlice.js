import {createSlice, current} from '@reduxjs/toolkit';

const organization = createSlice({
  name: 'organization',
  initialState: {users: []},
  reducers: {
    addUsers: (state, payload) => {
      console.log('reducer addUsers', current(state), payload);
      //   const newUser = action.payload;
      //   const existingUsers = JSON.parse(JSON.stringify(state.users));
      //   const newUsers = [...existingUsers, newUser];
      //   state.users= newUsers;
      state.users.push(payload.payload);
    },
  },
});

export const {addUsers} = organization.actions;
export default organization.reducer;
