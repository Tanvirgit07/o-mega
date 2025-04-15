import { configureStore } from '@reduxjs/toolkit'
import shofyReducer from "./shofySlice";
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import { WebStorage } from 'redux-persist/lib/types';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

export function createPersistStore(): WebStorage{
  const isServer = typeof window === "undefined";

  if(isServer){
    return{
      getItem(){
        return Promise.resolve(null);
      },
      setItem(){
        return Promise.resolve();
      },
      removeItem(){
        return Promise.resolve();
      }
    }
  }
  return createWebStorage("local");
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStore()

const persistConfig = {
  key: 'root',
  vefsion:1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, shofyReducer)

export const store = configureStore({
  reducer: {
    shofy: persistedReducer,
  },
})

export const persistor = persistStore(store);