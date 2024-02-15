<template>
  <div class="flex" role="radiogroup">
    <div
        v-for="index in 5"
        :key="index"
        class="cursor-pointer py-2"
        :class="{'text-yellow-400': index <= model, 'text-gray-400': index > model}"
        @click="model = index"
        role="radio"
        :aria-checked="index <= model.value ? 'true' : 'false'"
        :aria-label="'Rating ' + index"
    >
      ★
    </div>
  </div>
</template>


<script setup>
const model = defineModel({default: 1})
</script>
