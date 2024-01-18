import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUser(state, action) {
      state.splice(0, state.length);
    },
  },
  extraReducers(builder) {
    builder.addCase(userSlice.actions.deleteUser, () => {
      state.splice(0, state.length);
    });
  },
});

export default userSlice;
//export userSlice.reducer  hum is tra b export kr saktay haan or store may or fr store may ya add karaan gay //users: userSlice
export const { addUser, removeUser, deleteUser } = userSlice.actions;
