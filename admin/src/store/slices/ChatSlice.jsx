// import { createSlice } from '@reduxjs/toolkit';
// import { NEW_MESSAGE_ALERT } from '../../constants/events';

// let newMessageAlert = localStorage.getItem(NEW_MESSAGE_ALERT);
// newMessageAlert = newMessageAlert ? JSON.parse(newMessageAlert) : [];

// const initialState = {
//   notificationCount: 0,
//   newMessagesAlert: newMessageAlert
// };

// const chatSlice = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     incrementNotification: (state) => {
//       state.notificationCount += 1;
//     },
//     resetNotificationCount: (state) => {
//       state.notificationCount = 0;
//     },
//     setNewMessagesAlert: (state, action) => {
//       const chatId = action.payload.chatId;

//       const index = state.newMessagesAlert.findIndex((item) => item.chatId === chatId);

//       if (index !== -1) {
//         state.newMessagesAlert[index].count += 1;
//       } else {
//         state.newMessagesAlert.push({
//           chatId,
//           count: 1
//         });
//       }
//     },
//     removeNewMessagesAlert: (state, action) => {
//       state.newMessagesAlert = state.newMessagesAlert.filter((item) => item.chatId !== action.payload);
//     }
//   }
// });

// export default chatSlice;
// export const { incrementNotification, resetNotificationCount, setNewMessagesAlert, removeNewMessagesAlert } = chatSlice.actions;
