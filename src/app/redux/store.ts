"use client"
import {  persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/userSlice';
import baseApi from "./features/api/baseApi";
import counterReducer from "./features/counter/counterSlice";
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    // [baseApi.reducerPath]:baseApi.reducer,
    user:userReducer,
    counter : counterReducer
},)

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:persistedReducer,
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch