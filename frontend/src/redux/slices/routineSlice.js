import { createSlice } from "@reduxjs/toolkit"
import { v4 } from "uuid"

const initialState = {}

const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {},
})

export default routineSlice.reducer
