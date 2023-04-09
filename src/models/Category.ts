export interface Category {
  key: string;
  label: string;
  labels: Map<string, string>;
  modelId: string;
  children?: Category[];
}
