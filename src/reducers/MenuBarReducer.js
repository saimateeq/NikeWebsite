import { createSlice } from "@reduxjs/toolkit";
export const MenuBarSlice = createSlice({
    name: 'MenuBar',
    initialState: {
        value : false
    },
    reducers: {
        setMenuBar: (state, action) => {
            state.value = action.payload
        },
    },
})
export const { setMenuBar } = MenuBarSlice.actions
export default MenuBarSlice.reducer