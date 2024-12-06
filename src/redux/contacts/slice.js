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

// Селектор для отримання фільтру
export const selectNameFilter = (state) => state.contacts.filter;

// Експортуємо редюсери
export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
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

// export default contactsSlice.reducer;
