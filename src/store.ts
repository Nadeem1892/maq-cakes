import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { api } from "./Service/ApiSlice"
import categorySlice from "./Service/Slices/categorySlice"



const store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        category: categorySlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch)
export default store
