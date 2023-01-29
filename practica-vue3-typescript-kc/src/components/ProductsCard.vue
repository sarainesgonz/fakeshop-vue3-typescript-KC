<template>
    <div class="container">
        <div class="item">
            <div class="item-image">
                <img :src="product.images[0]" :alt="product.title" />
            </div>
            <div class="item-description">
                <div class="item-name">{{ product.title }}</div>
                <p>{{ product.description }}</p>
                <h2>{{ product.price }}</h2>
                <button @click="$emit('addToCart', product)">Buy this</button>
                <button @click="$emit('showDetails', product)">Details</button>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Product } from '@/models/product';
import { defineComponent, PropType } from 'vue'


export default defineComponent({
    name: 'ProductsCard',
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
})
</script>

<style scoped>
.container {

    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}

.item {

    width: 230px;
    overflow: hidden;
    margin: 20px 20px 0 0;
    border-radius: 7px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;

}

.item:hover {
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.7);
}

.item img {
    width: 100%;
    height: 180px;
    margin: 0;
}

.item-description {
    padding: 5px;
}

.item-description h1 {
    font-weight: bold;
}
</style>
