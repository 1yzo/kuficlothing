export default (products, { text, sortBy }) => {
    return products.filter((product) => {
        const textMatch = product.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'priceLow') {
            return a.price < b.price ? -1 : 1;
        } else if (sortBy= 'priceHigh') {
            return a.price < b.price ? 1 : -1;
        }
    });
}