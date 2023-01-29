


<template>
  <div class="about">
    <!-- <CustomCard> -->
      <!-- <template v-slot:header>
        <h1>Welcome to your profile</h1>
        <p>Name: {{profile.name}}</p>
      </template>
      <template v-slot:body>
        <p>Email: {{profile.email}}</p>
    <p>Username: {{profile.username}}</p>
      </template>
      -->
    <!-- </CustomCard> -->
  </div>
</template>

<!-- 

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'ProfileView',
  setup() {
    const profile = ref(null)

    const fetchProfileData = async () => {
  
        const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile')
        profile.value = response.data

    }

      fetchProfileData()
  

    return {
      profile
    }
  }
})
</script>
 -->


