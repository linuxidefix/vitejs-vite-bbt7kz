<template>
  <div>
    <h2>{{ category.label }}</h2>
    <p>Category ID: {{ category.key }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>
