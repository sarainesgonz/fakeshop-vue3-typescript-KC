import { ActionTree } from "vuex";
import { AuthState } from "./state";
import { AxiosResponse } from 'axios'
import fakeShopApi from "@/api/fakeShopApi";
import { Credential } from "@/models/credentials";

const actions: ActionTree<AuthState, any> = {
 
    async login({commit}, credentials: Credential) {
        const { data } = await fakeShopApi.post<unknown, AxiosResponse<any>>('/auth/login', credentials);

        commit('setToken', data.token)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)

    
    },
    logout({commit}) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }
}

export default actions;

