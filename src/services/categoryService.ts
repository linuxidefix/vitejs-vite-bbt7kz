import { Category } from '../models/Category';
import { Taxonomy } from '../models/Taxonomy';

function generateCategories(id: number, depth: number): Category[] {
  if (depth <= 0) {
    return [];
  }
  const categories: Category[] = [];
  for (let i = 1; i <= 5; i++) {
    const label = `Category ${id}.${i}`;
    const labels: Map<string, string> = new Map([
      ['en', `Category ${id}.${i}`],
      ['fr', `Catégorie ${id}.${i}`],
    ]);
    const category: Category = {
      key: '' + id + i,
      label,
      modelId: 'mod_' + id + i,
      labels,
    };
    category.children = generateCategories((id + 1) * 10 + i, depth - 1);
    categories.push(category);
  }
  return categories;
}

function mapTaxonomyToCategory(taxonomyList: Taxonomy[]): Category[] {
  return taxonomyList.map((taxonomy) => {
    const labels = new Map(Object.entries(taxonomy.labels || {}));
    return {
      key: taxonomy.key,
      label: labels.get('en') || '',
      labels: labels,
      modelId: taxonomy.modelId,
      children: mapTaxonomyToCategory(taxonomy.children || []),
    };
  });
}

export async function getCategoryTree(): Promise<Category[]> {
  const taxonomyList = await getTaxonomyList();
  return mapTaxonomyToCategory(taxonomyList);
}

export const getTaxonomyList = async (): Promise<Taxonomy[]> => {
  const response = await fetch('../data.json');
  const taxonomyList: Taxonomy[] = await response.json();
  return taxonomyList;
};
