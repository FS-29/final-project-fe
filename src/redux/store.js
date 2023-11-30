import {configureStore} from "@reduxjs/toolkit"
import authReducers from "./reducers/auth-reducers"

const store = configureStore({
    reducer:{
        authUser: authReducers
    }
})

export default store