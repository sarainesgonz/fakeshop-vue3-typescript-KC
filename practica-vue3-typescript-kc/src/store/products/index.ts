import { Module } from "vuex";
import { IState } from "..";
import getters from "./getters";
import mutations from "./mutations";
import state, { IProductsState } from "./state";
import actions from './actions'

const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};

export default productsModule;