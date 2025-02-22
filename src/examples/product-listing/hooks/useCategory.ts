import { useQuery } from '@tanstack/react-query'
import fetchCategories from '../api/fetchCategories'
import { ProductType } from '../components/Product'
import useProductStore from '../store/useProductStore'
import { useEffect } from 'react'

const useCategory = () => {
    const { 
        selectedCategory,
        setSelectedCategory,
        sortOrder,
        setSortOrder,
        hasLoadedCategories,
        setHasLoadedCategories
    } = useProductStore()

    const onCategoryChange = (value: string) => {
        setSelectedCategory(value)
    }

    const onSortChange = (value: string) => {
        setSortOrder(value)
    }

    // Get initial products load status
    const { isSuccess: isProductsLoaded } = useQuery<ProductType[]>({
        queryKey: ['products', '', ''], // Empty strings to get initial load
        enabled: false
    })

    const categories = useQuery<string[] | undefined>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        // Only run once after initial products load.
        // This is just to demo an API call only after first api call finishes. 
        // This can prioritize the products load over category load for better performance.
        enabled: !hasLoadedCategories && isProductsLoaded
    })

    // Handle success using useEffect
    useEffect(() => {
        if (categories.isSuccess && !hasLoadedCategories) {
            setHasLoadedCategories(true)
        }
    })

    return {
        ...categories,
        selectedCategory,
        sortOrder,
        onCategoryChange,
        onSortChange
    }
}

export default useCategory
