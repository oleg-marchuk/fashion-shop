import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    isOpen: boolean
}

const initialState: AuthState = { isOpen: false }

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
})

export const { openModal } = authSlice.actions
export default authSlice.reducer
