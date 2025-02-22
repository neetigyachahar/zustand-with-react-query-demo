import { FC } from 'react';

export interface ProductType {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

interface ProductProps {
    product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
    const { title, price, category, description, image } = product;
    
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <div className="aspect-square w-full relative mb-4 overflow-hidden rounded-lg">
                <img 
                    src={image} 
                    alt={title}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>
            <div className="px-4 py-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200">{title}</h3>
                <p className="text-gray-600 mb-2">Category: {category}</p>
                <p className="text-xl font-bold mb-2 text-gray-900">${price}</p>
                <p className="text-gray-700 text-sm line-clamp-2 mb-4">{description}</p>
            </div>
            <div className="px-4 py-2 border-t border-gray-200">
                <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
