import { createStore } from "redux";
import homeReducer from '../../store/Home/home.reducer'

export const store = createStore(homeReducer);