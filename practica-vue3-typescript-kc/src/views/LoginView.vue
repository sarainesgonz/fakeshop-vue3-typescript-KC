<template>
  <div>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'loginView',
  components: {
    LoginForm
  },

  setup() {

    return {

    }
  }
})
</script>
