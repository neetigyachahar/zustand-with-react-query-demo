import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../components/Product";
import { fetchProducts, fetchCategoryProducts } from "../api/fetchProducts";
import useProductStore from "../store/useProductStore";

const useProducts = () => {
    const { selectedCategory, sortOrder } = useProductStore();

    const products = useQuery<ProductType[]>({
        queryKey: ['products', selectedCategory, sortOrder],
        queryFn: async () => {
            // If category is selected, use category-specific endpoint
            if (selectedCategory) {
                return fetchCategoryProducts(selectedCategory, sortOrder || undefined);
            }
            // Otherwise use main products endpoint
            return fetchProducts(sortOrder || undefined);
        },
        staleTime: 1000 * 60 * 2, // Use the cache value till 2 minutes have passed
    });

    return products;
};

export default useProducts;
