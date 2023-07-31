import { applyMiddleware, legacy_createStore as createStore } from "redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import MyReducer from "../Reducer/MyReducer";
import logger from 'redux-logger'
import thunk from "redux-thunk"


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, MyReducer)


    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
  export { store, persistor }
