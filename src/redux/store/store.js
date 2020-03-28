import { createStore,applyMiddleware} from "redux";
import redux_thunk from 'redux-thunk'
import { reducer } from "../reducers/reducer";

export const store = createStore(reducer,applyMiddleware(redux_thunk));
