import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/auth/auth'
import disReducer from '../slice/discussion/discussion'
export const store = configureStore({
  reducer: {
    users: userReducer,
    diss: disReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch