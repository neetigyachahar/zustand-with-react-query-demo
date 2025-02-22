import { create } from 'zustand'

interface ProductStore {
    selectedCategory: string
    sortOrder: string
    hasLoadedCategories: boolean
    setSelectedCategory: (category: string) => void
    setSortOrder: (order: string) => void
    setHasLoadedCategories: (loaded: boolean) => void
}

const useProductStore = create<ProductStore>((set) => ({
    selectedCategory: '',
    sortOrder: '',
    hasLoadedCategories: false,
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    setSortOrder: (order) => set({ sortOrder: order }),
    setHasLoadedCategories: (loaded) => set({ hasLoadedCategories: loaded })
}))

export default useProductStore
