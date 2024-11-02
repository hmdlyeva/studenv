import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/auth/auth'
import disReducer from '../slice/discussion/discussion'
import eventReducer from '../slice/event/event'
import resourceReducer from '../slice/resource/resource'
import companiesReducer from '../slice/companies/companies'
import profilesReducer from '../slice/profile/profile'
export const store = configureStore({
  reducer: {
    users: userReducer,
    diss: disReducer,
    events: eventReducer,
    resources: resourceReducer,
    companies: companiesReducer,
    profiles: profilesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch