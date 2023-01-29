
<template>
    <div v-if="!isLoading">
        <CustomCard>
            <template v-slot:header>
                <h1>Product: {{ product.title }}</h1>
            </template>
            <template v-slot:body>
                <img :src="product.images" :alt="product.title" />
            </template>
            <template v-slot:footer>
                <div class="text">
                    <h3>Descriptions: {{ product.description }}</h3>
                    <h2>Price: {{ product.price }}</h2>
                </div>
            </template>
        </CustomCard>

    </div>
    <div v-else>Cargando...</div>
</template>
  
<script lang="ts">
import CustomCard from "@/components/CustomCard.vue";
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";


export default defineComponent({
    name: "detailsView",
    frame: {
        CustomCard
    },
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    setup(props) {

        const { product, fetchProductById, isLoading } = useProducts();

        fetchProductById(props.id);
        return {
            product,
            isLoading
        };
    },
    components: { CustomCard }
});
</script>
  
<style scoped>
img {
    max-width: 80%;
    height: 20rem;
    padding: 2rem;
}

h1,
h2 {
    font-weight: bold;
    font-size: 24px;
}

.text {
    width: 60%;
    margin: 0 auto;
}

h3 {
    margin-bottom: 1rem;
}
</style>