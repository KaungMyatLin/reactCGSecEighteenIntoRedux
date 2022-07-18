import { configureStore } from '@reduxjs/toolkit';
import counterSlceRdr from './counter-slice'
import authSlceRdr from './authen-slice'

const createRtlKitconfigStore = configureStore({
    reducer: {counterSlceRdr: counterSlceRdr, authSlceRdr: authSlceRdr}
})
export default createRtlKitconfigStore;