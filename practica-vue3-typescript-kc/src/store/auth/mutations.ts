import { MutationTree } from "vuex";
import { IState } from "..";
import { AuthState } from "./state";

const mutations: MutationTree<AuthState> = {
    setToken(state: AuthState, token:string) {
        state.token = token
    }
    
}

export default mutations