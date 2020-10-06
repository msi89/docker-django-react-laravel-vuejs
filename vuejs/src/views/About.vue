<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a :href="apiUrl" target="_blank">App url</a>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const apiUrl = ref(process.env.VUE_APP_API_URL)
    return { apiUrl }
  }
}
</script>
