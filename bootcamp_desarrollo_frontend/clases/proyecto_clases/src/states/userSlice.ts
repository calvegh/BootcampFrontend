import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user:string,
    region:string,
    email:string
}
const initialState: UserState = {
    user:'',
    region:'',
    email:''
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        save: (state:UserState, action:PayloadAction<UserState>) => {
            console.log("llamando al reducer save")
            state = action.payload;
            return state
            
        },
        remove: (state:UserState) => {
            state = {...initialState};
            return state
        },
        updateEmail: (state:UserState, action:PayloadAction<string>) => {
            state.email = action.payload;
            return state
        }
    }})

export const {save,remove,updateEmail} = userSlice.actions;
export default userSlice.reducer