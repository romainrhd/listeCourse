import {createSlice} from "@reduxjs/toolkit";

export const shoppingListsSlice = createSlice({
    name: 'shoppingLists',
    initialState: {
        shoppingLists: [],
    },
    reducers: {
        getShoppingLists: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.shoppingLists = action.payload;
        },
        addShoppingList: (state, action) => {
            // TODO : mettre à jour les données de la bonne shopping list si elle existe déjà
            state.shoppingLists.push(action.payload);
        }
    },
});

export const { getShoppingLists, addShoppingList } = shoppingListsSlice.actions;

export const selectShoppingLists = (state) => state.shoppingLists;

export default shoppingListsSlice.reducer;