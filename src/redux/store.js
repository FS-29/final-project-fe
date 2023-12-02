import {configureStore} from "@reduxjs/toolkit"
import authReducers from "./reducers/auth-reducers"
import laporanReducers from "./reducers/laporan-reducers"

const store = configureStore({
    reducer:{
        authUser: authReducers,
        laporan: laporanReducers
    }
})

export default store