export type ProductListItem = {
  id: string;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
};

export type ProductListResponse = {
  totalCount: number;
  list: ProductListItem[];
};

export type ProductUpdateInput = Partial<{
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
}>;
