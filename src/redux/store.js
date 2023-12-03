import {configureStore} from "@reduxjs/toolkit"
import authReducers from "./reducers/auth-reducers"
import profilReducers from "./reducers/profil-reducer"

const store = configureStore({
    reducer:{
        authUser: authReducers,
        profilUser: profilReducers
    }
})

export default store