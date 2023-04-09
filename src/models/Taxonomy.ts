export interface Taxonomy {
  key: string;
  labels: Map<string, string>;
  modelId: string;
  children?: Taxonomy[];
}
