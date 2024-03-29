"use client"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"
import { store } from "./store"
import { persistStore } from 'redux-persist'

export function Providers({ children }: any) {
    let persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>)
}