import { FC } from 'react';
import useCategory from '../hooks/useCategory';

const sortOptions = [
    { label: 'Name: A to Z', value: 'asc' },
    { label: 'Name: Z to A', value: 'desc' }
];

const TopBar: FC = () => {
    const { 
        data: categories, 
        sortOrder,
        selectedCategory,
        onSortChange, 
        onCategoryChange,
    } = useCategory();

    if (!categories) return <div>loading...</div>;

    return (
        <div className="bg-white shadow-sm mb-6 p-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <select 
                        className="block w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        onChange={(e) => onCategoryChange(e.target.value)}
                        value={selectedCategory}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <select
                        className="block w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        onChange={(e) => onSortChange(e.target.value)}
                        value={sortOrder}
                    >
                        <option value="">Sort By</option>
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
