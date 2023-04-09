<template>
  <div class="container">
    <div class="tree">
      <Tree
        :value="categories"
        selectionMode="single"
        :metaKeySelection="false"
        @nodeSelect="onNodeSelect"
        class="w-full"
      ></Tree>
    </div>
    <div class="main-content">
      <h2 v-if="selectedCategory">{{ selectedCategory }}</h2>
      <p v-else>No category selected</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Tree from 'primevue/tree';
import { getCategoryTree } from './services/categoryService';

const categories = ref(null);
const selectedCategory = ref(null);

onMounted(async () => {
  categories.value = await getCategoryTree();
});

const onNodeSelect = (event) => {
  if (event.label) {
    selectedCategory.value = event.label;
  }
};
</script>

<style scoped>
.container {
  display: flex;
}

.tree {
  width: 30rem;
  margin-right: 2rem;
}

.main-content {
  flex-grow: 1;
}
</style>
