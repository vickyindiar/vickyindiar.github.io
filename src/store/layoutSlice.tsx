import { createSlice } from "@reduxjs/toolkit";
import routes, {Iroutes} from "../data/routes";

interface IInitialType {
    theme: 'light' | 'dark',
    nav:Iroutes[]
}
const initialState:IInitialType ={
    theme: 'light',
    nav:[...routes]
}

export const layoutSlice = createSlice({
    name:'layout',
    initialState,
    reducers:{
        changeTheme: (s, a) => {
            s.theme = a.payload
        },
        changeRouteActive: (s, a) => {
            let actived = s.nav.find(n => n.active)
            if(actived){ actived.active = false }
            let beActive = s.nav.find(n => n.label === a.payload.label)
            if(beActive) { beActive.active = true}

        }

    }

});

export const {changeTheme, changeRouteActive} = layoutSlice.actions

export default layoutSlice.reducer