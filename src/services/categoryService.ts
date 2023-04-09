interface Category {
  key: number;
  label: string;
  children?: Category[];
}

function generateCategories(id: number, depth: number): Category[] {
  if (depth <= 0) {
    return [];
  }
  const categories: Category[] = [];
  for (let i = 1; i <= 5; i++) {
    const label = `Category ${id}.${i}`;
    const category: Category = { key: id + i, label };
    category.children = generateCategories(category.key * 10 + i, depth - 1);
    categories.push(category);
  }
  return categories;
}

export function getCategoryTree(): Promise<Category[]> {
  return Promise.resolve(generateCategories(1, 4));
}
