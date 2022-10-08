import { createSlice } from '@reduxjs/toolkit'


const idenSlice = createSlice({
  name: "iden",
  initialState: {
    id: null,
    loading: true
  },
  reducers: {
    setIden: (state, action) => {
      state.id = action.payload,
      state.loading = false;
    }
  }

})


export const { setIden } = idenSlice.actions

export default idenSlice.reducer