import { Module } from "vuex";
import { IState } from "..";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { AuthState } from "./state";

const authModule: Module<AuthState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};

export default authModule;