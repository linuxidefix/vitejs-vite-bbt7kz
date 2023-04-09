<template>
  <div>
    <h2>{{ category.label }}</h2>
    <p>Category ID: {{ category.key }}</p>
    <p>Children: {{ category.children }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Category } from '@/models/Category';

const props = defineProps({
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
});
</script>
