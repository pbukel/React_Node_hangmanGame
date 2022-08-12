import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      users: [
        {
          photo:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          username: "Tadas",
          id: 1111,
          pass: "hello",
          chats: [
            {
              id: 2222,
              name: "Miranda",
              messages: [
                {
                  id: 2222,
                  text: "hello",
                },
                {
                  id: 1111,
                  text: "hi",
                },
              ],
            },
            {
              id: 3333,
              name: "Pavel",

              messages: [
                {
                  id: 1111,
                  text: "hello",
                },
                {
                  id: 3333,
                  text: "hi",
                },
              ],
            },
          ],
        },
        {
          photo:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          username: "Miranda",

          id: 2222,
          pass: "hello",
          chats: [
            {
              id: 1111,
              name: "Tadas",

              messages: [
                {
                  id: 2222,
                  text: "hello",
                },
                {
                  id: 1111,
                  text: "hi",
                },
              ],
            },
          ],
        },
        {
          photo:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          username: "Pavel",
          id: 3333,
          pass: "asd",
          chats: [
            {
              id: 2222,
              name: "Miranda",

              messages: [
                {
                  id: 2222,
                  text: "hello",
                },
                {
                  id: 3333,
                  text: "hi",
                },
              ],
            },
          ],
        },
      ],
      loggedUser: null,
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.value.users = [...state.value.users, action.payload];
    },
    updateUsers: ({ value }, { payload }) => {
      value.users = payload;
    },
    setLogetUser: ({ value }, { payload }) => {
      value.loggedUser = payload;
    },
    changePicture: ({ value }, { payload }) => {
      value.loggedUser.photo = payload;
    },
    addMsg: ({ value }, { payload }) => {
      value.loggedUser.chats[payload.index].messages = payload.array;
    },
    updateUser: ({ value }, { payload }) => {
      value.users[payload.index] = payload.user;
    },
    userChatUpdate: ({ value }, { payload }) => {
      value.users[payload.userIndex].chats[payload.messageIndex].messages =
        payload.array;
    },
    addChatifEmplty: ({ value }, { payload }) => {
      value.users[payload.userIndex].chats.push(payload.data);
    },
    addChatsforlogedUserifEmplty: ({ value }, { payload }) => {
      value.loggedUser.chats.push(payload.data);
    },
    removeChats: ({ value }, { payload }) => {
      value.loggedUser.chats = payload;
    },
  },
});
export const {
  addUser,
  updateUsers,
  updateUser,
  addMsg,
  setLogetUser,
  changePicture,
  userChatUpdate,
  addChatifEmplty,
  addChatsforlogedUserifEmplty,
  removeChats,
} = userSlice.actions;

export default userSlice.reducer;
