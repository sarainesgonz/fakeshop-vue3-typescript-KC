<template>
    <nav>
        <router-link to="/">Login</router-link>
        <router-link :to="{ name: 'productsView' }">List of Products</router-link>
        <!-- <router-link :to="{name: 'detailsView', params: {id: 0}}">Product Details</router-link>  -->
        <router-link :to="{ name: 'profileView' }">My Profile</router-link>

        <ButtonComponent class="logout" type="logout" @logout="logout">Logout</ButtonComponent>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
    components: {
        ButtonComponent
    },
    setup() {
        const logout = () => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
        }
        return {
            logout
        };
    },

})
</script>

<style scoped>
nav {
    background-color: rgb(231, 210, 250);
    /* padding: 5px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.logout {
    background-color: rgb(161, 37, 37);
    color: white;
}
</style>