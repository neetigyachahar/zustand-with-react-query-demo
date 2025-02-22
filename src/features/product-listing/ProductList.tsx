"use client"

import { FC } from 'react';
import Product from './components/Product';
import useProducts from './hooks/useProducts';
import TopBar from './components/TopBar';

const ProductList: FC = () => {
    const { data: products, isLoading, error } = useProducts()

    console.log({ products, isLoading, error });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-lg">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-lg text-red-500">Error loading products</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <TopBar />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                    {products?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
