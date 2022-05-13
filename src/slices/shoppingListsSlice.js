import {createSlice} from "@reduxjs/toolkit";

export const shoppingListsSlice = createSlice({
    name: 'shoppingLists',
    initialState: {
        list: []
    },
    reducers: {
        getShoppingLists: (state, action) => {
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