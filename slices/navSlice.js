import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    origin : null,
    destinatition: null,
    travelTimeInformation: null  
}


export const navSlice = createSlice ({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action)=>{
            state.origin = action.payload
        },
        setDestinatition: (state, action)=>{
            state.destinatition = action.payload
        },
        setTravelTimeInformation: (state, action)=>{
            state.travelTimeInformation = action.payload
        },
    }
})

export const {setOrigin, setDestinatition, setTravelTimeInformation } = navSlice.actions;


export const selectOrigin = (state)=> state.nav.origin;
export const selectDestinatition = (state)=> state.nav.destinatition;
export const selectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;

export default navSlice.reducer;