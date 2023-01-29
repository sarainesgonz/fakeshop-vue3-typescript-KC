import { GetterTree } from "vuex";
import { IState } from "..";
import { AuthState } from "./state";

const getters: GetterTree<AuthState, IState> = {
    isAuth(state: AuthState) {
        return state.token != null
    },

}

export default getters