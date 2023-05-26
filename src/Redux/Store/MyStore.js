import { applyMiddleware, legacy_createStore as createStore } from "redux";
import MyReducer from "../Reducer/MyReducer";
import logger from 'redux-logger'
import thunk from "redux-thunk"
const store = createStore(MyReducer,
    applyMiddleware(thunk))
export default store