import {readFile} from 'fs/promises';

async function getProductFromDatabase(productId) {
    const products = await loadProducts();
    return products.find(product => product.id === productId);
};

async function getRelatedProductsFromDatabase(productId) {
	const products = await loadProducts();
	return products.filter((product) => productId !== product.id);
};


async function loadProducts() {
    const content = await readFile('data/products.json', 'utf8');
    return JSON.parse(content);
};

export async function load({params}) {
    const productId = params.id;
    const product = await getProductFromDatabase(productId);
    const relatedProducts = await getRelatedProductsFromDatabase(productId);
    return {product, relatedProducts};
};