import { ProductType } from "../components/Product";

// Fetch all products with optional sort
export const fetchProducts = async (sort?: string): Promise<ProductType[]> => {
    const baseUrl = 'https://fakestoreapi.com/products';
    const url = sort ? `${baseUrl}?sort=${sort}` : baseUrl;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

// Fetch products by category with optional sort
export const fetchCategoryProducts = async (category: string, sort?: string): Promise<ProductType[]> => {
    const baseUrl = `https://fakestoreapi.com/products/category/${category}`;
    const url = sort ? `${baseUrl}?sort=${sort}` : baseUrl;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch category products');
    }
    return response.json();
};
