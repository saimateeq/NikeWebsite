import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ShoeReducer from './reducers/ShoeReducer'
import MenuBarReducer from './reducers/MenuBarReducer'

const RootReducers = combineReducers({
    ShoeReducer : ShoeReducer,
    MenuBarReducer : MenuBarReducer,
   
})
export default configureStore({
    reducer: RootReducers,
})