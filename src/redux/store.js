import {configureStore} from "@reduxjs/toolkit"
import authReducers from "./reducers/auth-reducers"
import profilReducers from "./reducers/profil-reducer"
import dashboardReducers from "./reducers/dashboard-reducers"

const store = configureStore({
    reducer:{
        authUser: authReducers,
        profilUser: profilReducers,
        dashUser: dashboardReducers
    }
})

export default store