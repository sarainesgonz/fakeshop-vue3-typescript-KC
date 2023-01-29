import { computed } from "vue";
import { useStore } from "vuex";


const useProducts = () => {

    const store = useStore();

    return {

        products: computed(() => store.getters["products/getProducts"]),  //fijarse en ele getters.ts como ha sido definido en la carpeta que le corresponde

        isLoading: computed(() => store.getters["products/getIsLoading"]),

        product: computed(() => store.getters["products/getProduct"]),

        // ACTIONS 
        fetchProducts: () => store.dispatch("products/fetchProducts"),

        fetchProductById: (productId: number) => store.dispatch("products/fetchProductById", productId)

    }

}

export default useProducts;