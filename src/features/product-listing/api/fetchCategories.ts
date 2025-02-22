const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
};

export default fetchCategories;
