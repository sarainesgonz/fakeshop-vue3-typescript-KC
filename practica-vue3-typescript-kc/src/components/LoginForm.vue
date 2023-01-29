<template>
 
  <CustomCard>
    <template v-slot:header>
      <h1>Login form</h1>
    </template>
    <template v-slot:body>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
        
      </form>
    </template>
    <template v-slot:footer>
      <h3>Have you forgotten your password?</h3>
    </template>

    <br>

  </CustomCard>
</template>

  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import store from '@/store';
import { useRouter } from 'vue-router';
import CustomCard from './CustomCard.vue';


export default defineComponent({
  name: 'loginForm',
  components: {
    CustomCard
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter()

    function login() {
      console.log(`Email: ${email.value}`);
      console.log(`Password: ${password.value}`);
      if (email.value !== null && password.value !== null) {
        store.dispatch('auth/login', { email: email.value, password: password.value })
        router.push({ name: "productsView" })

      } else {
        alert('Both, email and passwords are requested!')
      }

    }


    return {
      email,
      password,
      login
    }
  },
});
</script>

<style scoped>
h1,
button {
  text-transform: uppercase;
  font-weight: bold;
  margin: 2rem;
}

label {
  padding: 3rem;
}

input {
  margin: 1rem;
  width: 80%;
}

button {
  padding: 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 50%;
}

button:hover {
  box-shadow: 10px 10px 24px -16px rgba(117, 21, 117, 3);
}
</style>