import {readFile} from 'fs/promises';

import {addToCart, loadCart} from '$lib/server/cart';

async function loadProducts() {
    const content = await readFile('data/products.json', 'utf8');
    return JSON.parse(content);
};

export async function load({params}) {
    const products = await loadProducts();
    const product = products.find(product => product.id === params.id);
    const relatedProducts = products.filter((product) => params.id !== product.id);
	const cart = await loadCart();
    return {product, relatedProducts, cart};
};

export const actions = {
	default: async ({request}) => {
		const data = await request.formData();
		await addToCart(data.get('productId'));
	}
};