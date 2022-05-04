import { configureStore } from "@reduxjs/toolkit";
import shoppingListsReducer from "../slices/shoppingListsSlice";

const store = configureStore({
    reducer: {
        shoppingLists: shoppingListsReducer,
    },
});

export default store;