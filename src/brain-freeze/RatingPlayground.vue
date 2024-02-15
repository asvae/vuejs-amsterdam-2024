<template>
  <Rating v-model="value"/>
</template>

<script setup>
// App.vue
import Rating from "./Rating.vue";
import {ref} from "vue";

const value = ref(2)
</script>
