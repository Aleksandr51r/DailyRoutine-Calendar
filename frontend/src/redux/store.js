import { configureStore } from "@reduxjs/toolkit"
import routineSlice from "./slices/routineSlice"

const store = configureStore({
  reducer: {
    routine: routineSlice,
  },
})

export default store
