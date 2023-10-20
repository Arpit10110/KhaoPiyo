import {configureStore} from "@reduxjs/toolkit"
import { cartreducer } from "./Reducer"
const store= configureStore({
    reducer:{
        cart :cartreducer
    }
})
export default store