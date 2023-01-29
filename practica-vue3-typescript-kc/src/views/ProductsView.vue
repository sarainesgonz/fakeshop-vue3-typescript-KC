<template>
  <div>
    <NavBar />
  </div>
  <div class="main-container">
    <SearchBar />
    <div v-if="isLoading">Loading...</div>
    <div class="product-container" v-else>
      <ProductsCard v-for="product in products" :key="product.id" :product="product" @addToCart="addToCart"
        @showDetails="showDetails" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsCard from '@/components/ProductsCard.vue';
import useProducts from '@/composables/useProducts'
import SearchBar from '@/components/SearchBar.vue'
import { Product } from '@/models/product';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'productsView',
  components: {
    SearchBar,
    ProductsCard,
    NavBar
  },
  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const router = useRouter();

    fetchProducts()

    return {
      products,
      isLoading,

      addToCart: (product: Product) => console.log('addtocart'),

      showDetails: (product: Product) =>
        router.push({ name: "detailsView", params: { id: product.id } })

    }

  },
})
</script>

<style scoped>
.main-container {
  margin: 2rem;
}

.product-container {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

}
</style>
