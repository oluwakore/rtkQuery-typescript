import {configureStore} from '@reduxjs/toolkit'
import {contactsApi} from '../services/contactsApi'
import idenReducer from '../services/idSlice'

export const store = configureStore({
  reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
      identifier: idenReducer
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})


