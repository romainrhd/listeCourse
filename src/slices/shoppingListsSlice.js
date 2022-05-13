import {createSlice} from "@reduxjs/toolkit";

export const shoppingListsSlice = createSlice({
    name: 'shoppingLists',
    initialState: {
        list: []
    },
    reducers: {
        getShoppingLists: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // TODO : ne pas écraser la liste qui existe déjà
            state.list = action.payload;
        },
        addShoppingList: (state, action) => {
            state.list = state.list.map((shoppingList) => {
                if (shoppingList.id !== action.payload.id) {
                    return shoppingList;
                }

                return {
                    ...shoppingList,
                    ...action.payload
                };
            });
        }
    },
});

export const { getShoppingLists, addShoppingList } = shoppingListsSlice.actions;

export const selectShoppingLists = (state) => state.shoppingLists;

export default shoppingListsSlice.reducer;