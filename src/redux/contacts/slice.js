import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((contact) => contact.id !== payload);
      });
  },
});

export default contactsSlice.reducer;

// import { createSlice, createSelector } from "@reduxjs/toolkit";
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   updateContact,
// } from "./operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     filter: "",
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(addContact.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(deleteContact.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = state.items.filter(
//           (contact) => contact.id !== action.payload
//         );
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(updateContact.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateContact.fulfilled, (state, action) => {
//         state.loading = false;
//         const index = state.items.findIndex(
//           (contact) => contact.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.items[index] = action.payload;
//         }
//       })
//       .addCase(updateContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setFilter } = contactsSlice.actions;

// export const selectContactsItems = (state) => state.contacts.items;
// export const selectContactsLoading = (state) => state.contacts.loading;
// export const selectContactsError = (state) => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContactsItems, (state) => state.contacts.filter],
//   (items, filter) =>
//     items.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.toLowerCase().includes(filter.toLowerCase())
//     )
// );

// export default contactsSlice.reducer;
