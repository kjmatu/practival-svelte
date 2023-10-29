<script>


let relatedProducts = [
  {
    id: 'react-book',
    name: 'React Book',
    price: 3500,
  },
  {
    id: 'vue-book',
    name: 'Vue Book',
    price: 3500,
  },
  {
    id: 'angular-book',
    name: 'Angular Book',
    price: 3500,
  },
]

  let cart = [];

  function addToCart(productId) {
    cart = [...cart, productId];
  }

</script>

<header class="header">
  <a class="header-title" href="/">Svelte EC</a>
  <nav>
    <ul class="header-links">
      <li>ようこそゲストさん</li>
      <li>
        <a href="/cart">カート (0)</a>
      </li>
    </ul>
  </nav>
</header>

<article class="product">
  <div class="product-main">
    <div class="image-container">
      <img src="https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-1.png" alt="『Svelte Guide』表紙">
    </div>

    <div>
      <h2>Svelte Guide</h2>
      <dl>
        <dt>価格</dt>
        <dd>3500円</dd>
      </dl>
      <div>

        {#if !cart.includes('svelte-book')}
          <button on:click={() => addToCart('svelte-book')}>カートに入れる</button>
        {:else}
          <button disabled>カート追加済み</button>
        {/if}
      </div>
    </div>
  </div>

  <footer>
    <h3>関連商品</h3>

    <ul>
      {#each relatedProducts as product}
        <li>
          <a href="/products/{product.id}">{product.name}</a>
          - {product.price}円
        </li>
      {/each}
    </ul>
  </footer>

</article>


<style>
  :global(body) {
    margin: 0;
    background-color: #eee;
    padding: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 15px;
    widows: 100%;
    max-width: 800px;
    height: 50px;
  }

  .header-title {
    font-weight: bold;
  }

  .header-links {
    display: flex;
    gap: 10px;
    padding: 0;
    margin: 0;
  }

  .product {
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    width: 100%;
    max-width: 800px;
  }

  .product-main {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .image-container {
    width: 100%;
    max-width: 400px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
  }

</style>
