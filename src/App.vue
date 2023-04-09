<template>
  <div class="container">
    <div class="tree">
      <Tree
        :value="categories"
        selectionMode="single"
        :metaKeySelection="false"
        :filter="true"
        @nodeSelect="onNodeSelect"
        class="w-full"
      ></Tree>
    </div>
    <div class="main-content">
      <CategoryDetails :category="selectedCategory" v-if="selectedCategory" />
      <p v-else>No category selected</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Tree from 'primevue/tree';
import { TreeNode } from 'primevue/api';

import { getCategoryTree } from './services/categoryService';
import CategoryDetails from './components/CategoryDetails.vue';
import Category from './models/Category';

const categories = ref<TreeNode[]>(null);
const selectedCategory = ref<Category | null>(null);

onMounted(async () => {
  categories.value = await getCategoryTree();
});

const convertNodeToCategory = (node: TreeNode): Category => {
  return { key: node.key, label: node.label, children: node.children };
};

const onNodeSelect = (node: TreeNode) => {
  console.log({ node });
  selectedCategory.value = convertNodeToCategory(node);
  console.log(selectedCategory.value);
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
