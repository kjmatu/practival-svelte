async function getProductFromDatabase(productId) {
    const products = await loadProducts();
    return products.find(product => product.id === productId);
};

async function getRelatedProductsFromDatabase() {
    return [
		{
			id: 'react-book',
			name: 'React Book',
			price: 2500,
            images: ['https://github.com/svelte-book/sample-app/raw/main/static/react-book-1.png']
		},
		{
			id: 'vue-book',
			name: 'Vue Book',
			price: 3500,
            images: ['https://github.com/svelte-book/sample-app/raw/main/static/vue-book-1.png']
		},
		{
			id: 'angular-book',
			name: 'Angular Book',
			price: 4500,
            images: ['https://github.com/svelte-book/sample-app/raw/main/static/angular-book-1.png']
		}
	];
};


async function loadProducts() {
    return [
        {
            id: 'svelte-book',
            name: 'Svelte Guide',
            price: 4000,
    
            images: [
                'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-1.png',
                'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-2.png',
                'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-3.png'
            ]
        },
		{
			id: 'react-book',
			name: 'React Book',
			price: 2500,
            images: [
                'https://github.com/svelte-book/sample-app/raw/main/static/react-book-1.png', 
                'https://github.com/svelte-book/sample-app/raw/main/static/react-book-2.png', 
                'https://github.com/svelte-book/sample-app/raw/main/static/react-book-3.png'
            ]
		},
		{
			id: 'vue-book',
			name: 'Vue Book',
			price: 3500,
            images: [
                'https://github.com/svelte-book/sample-app/raw/main/static/vue-book-1.png', 
                'https://github.com/svelte-book/sample-app/raw/main/static/vue-book-2.png', 
                'https://github.com/svelte-book/sample-app/raw/main/static/vue-book-3.png'
            ]
		},
		{
			id: 'angular-book',
			name: 'Angular Book',
			price: 4500,
            images: [
                'https://github.com/svelte-book/sample-app/raw/main/static/angular-book-1.png', 
                'https://github.com/svelte-book/sample-app/raw/main/static/angular-book-2.png', 
                'https://github.com/svelte-book/sample-app/raw/main/static/angular-book-3.png'
            ]
		}

    ]
};

export async function load({params}) {
    const productId = params.id;
    const product = await getProductFromDatabase(productId);
    const relatedProducts = await getRelatedProductsFromDatabase(productId);
    return {product, relatedProducts};
};