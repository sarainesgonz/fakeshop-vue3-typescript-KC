import { createStore } from 'vuex'
import productsModule from './products'
import authModule from './auth'

export interface IState {
  greeting: string

}

export default createStore<IState>({
  state: {
    greeting: ''
   
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    products: productsModule,
    auth : authModule
  
  }
})
