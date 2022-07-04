import { configureStore,combineReducers  } from '@reduxjs/toolkit'
import { productSlice, currencySlice } from './currencySlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
const middleWares = [logger];

const rootReducer = combineReducers({
  [currencySlice.name]: currencySlice.reducer,
  [productSlice.name]: productSlice.reducer,
})
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,

})
export const persistor = persistStore(store);
export default store;