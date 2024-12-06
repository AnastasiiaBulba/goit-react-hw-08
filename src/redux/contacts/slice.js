import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // список контактів
    loading: false, // статус завантаження
    error: null, // помилки
    filter: "", // фільтр для пошуку
  },
  reducers: {
    // Редюсер для встановлення фільтра
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
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

// Селектори
export const selectAllContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.contacts.filter;

// Селектор для відфільтрованих контактів
export const selectFilteredContacts = (state) => {
  const filter = state.contacts.filter.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};

// Селектори для завантаження і помилок
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;

// Експортуємо редюсери
export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [], // список контактів
//     loading: false, // статус завантаження
//     error: null, // помилки
//     filter: "", // фільтр для пошуку
//   },
//   reducers: {
//     // Редюсер для встановлення фільтра
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.items = payload;
//       })
//       .addCase(fetchContacts.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//       })
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.items.push(payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.items = state.items.filter((contact) => contact.id !== payload);
//       });
//   },
// });

// // Селектор для отримання фільтру
// export const selectNameFilter = (state) => state.contacts.filter;

// // Експортуємо редюсери
// export const { setFilter } = contactsSlice.actions;

// export const { actions } = contactsSlice;

// export default contactsSlice.reducer;

// // export default contactsSlice;

// // import { createSlice } from "@reduxjs/toolkit";
// // import { fetchContacts, addContact, deleteContact } from "./operations";

// // const contactsSlice = createSlice({
// //   name: "contacts",
// //   initialState: {
// //     items: [],
// //     loading: false,
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchContacts.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
// //         state.loading = false;
// //         state.items = payload;
// //       })
// //       .addCase(fetchContacts.rejected, (state, { payload }) => {
// //         state.loading = false;
// //         state.error = payload;
// //       })
// //       .addCase(addContact.fulfilled, (state, { payload }) => {
// //         state.items.push(payload);
// //       })
// //       .addCase(deleteContact.fulfilled, (state, { payload }) => {
// //         state.items = state.items.filter((contact) => contact.id !== payload);
// //       });
// //   },
// // });

// // export default contactsSlice.reducer;
