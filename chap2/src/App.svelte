<script>
let name = "Svelte";

let imageUrl = "https://github.com/sveltejs/branding/raw/master/svelte-logo.png";
let imageAlt = "Svelteのロゴ";
let n = 1;

let href = "https://svelte.dev/"

let disabled = false;


let attrs = {type: "submit", disabled: false, class: "btn"};

import svelteLogo from './assets/svelte.svg'

let active = true;

let color = "white";


let loggedIn = false;

function toggle() {
  loggedIn = !loggedIn;
}

let rate = 10;

// let products = [];
let products = [
  {name: "商品A", price: 100},
  {name: "商品B", price: 500},
  {name: "商品C", price: 1200},
];


let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3秒経過しました。");
  }, 3000);
});

let promise_1 = new Promise((resolve, reject) => {
  reject("エラー発生");
});


import SvelteLogo from './SvelteLogo.svelte';
import Button from './Button.svelte';
let buttonLabel = "送信";
let label = buttonLabel + "ボタン";

import UserProfile from './UserProfile.svelte';
let taro = {name: "太郎", id: "taro", bio: "よろしくお願いします。"};

import Box from './Box.svelte';
let condition = false;

import Card from './Card.svelte';

function handleClick() {
  alert("クリックされました。");
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  alert(`検索キーワードは ${formData.get('q')}です。`);
}

import HelloButton from './HelloButton.svelte';

function handleHello(event) {
  alert(event.detail);
}

import CustomButton from './CustomButton.svelte';

function handleClick2(event) {
  // alert("クリックされました2。");
  alert(event.construction.name);
}

</script>

<main>
  <p class="text">こんにちは、Svelte!</p>

  <img src={imageUrl} alt={imageAlt}>

  <div>現在の時刻は {new Date()} です。</div>
  <div>こんにちは {name} です。</div>

  <a href="page/{n}">次のページ</a>

  <a {href}>Svelte公式サイト</a>

  <button {disabled}>送信</button>
  <button {...attrs}>送信</button>

  <p class="blue">このテキストは青色です。</p>


  <div class="logo">
    <img src="..." alt="...">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </div>
  
  <img src="..." alt="...">

  <li class={active ? 'active': ''}>トップ</li>
  <li class:active={active}>トップ</li>
  <li class:active>トップ</li>

  <div style="color: red;">赤色で表示されます。</div>
  <div style:color="red">赤色で表示されます。</div>
  <div style:color={color}>color 変数に応じた色で表示されます。</div>
  <div style:color>color 変数に応じた色で表示されます。</div>


  {#if loggedIn}
    <button on:click={toggle}>ログアウト</button>
  {/if}

  {#if !loggedIn}
    <button on:click={toggle}>ログイン</button>
  {/if}

  {#if loggedIn}
    <button on:click={toggle}>ログアウト</button>
  {:else}
    <button on:click={toggle}>ログイン</button>
  {/if}


  {#if rate >= 8}
    <p>高評価</p>
  {:else if rate >= 4}
    <p>中評価</p>
  {:else}
    <p>低評価</p>
  {/if}

  <ul>
    {#each products as product}
      <li>{product.name} - {product.price}円</li>
    {:else}
      <li>商品はありません。</li>
    {/each}

    {#each products as product, i}
      <li>{i+1}個目の商品: {product.name} - {product.price}円</li>
    {:else}
      <li>商品はありません。</li>
    {/each}
  </ul>

  {#await promise}
    <p>Promise 解決待ち</p>
  {:then value}
    <p>{value}</p>
  {/await}


  {#await promise_1}
    <p>Promise 解決待ち</p>
  {:then value}
    <p>{value}</p>
  {:catch error}
    <p>{error}</p>
  {/await}

  <div>以下にSvelteのロゴ画像</div>
  <SvelteLogo />

  <Button label={buttonLabel} />
  <Button {label} />

  <UserProfile user={taro} />

  <Box>
    <h3>Svelteについて</h3>
    <p>SvelteはこれまでにないUIフレームワークです</p>
    <Button label="詳しくはこちら" />

    {#if condition}
      <div>...</div>
    {/if}
  </Box>

  <Box></Box>

  <Card>
    <h3 slot="title">Svelteについて</h3>
    <div slot="body">
      <p>SvelteはこれまでにないUIフレームワークです</p>
    </div>
  </Card>

  <button on:click={handleClick}>ここをクリック</button>
  <button on:click={() => alert("クリックされました２")}>ここをクリック</button>

  <form on:submit={handleSubmit}>
    <input type="search" name="q">
    <button type="submit">検索</button>
  </form>

<HelloButton on:hello={handleHello} />

<CustomButton on:click={handleClick2}> ここをクリック </CustomButton>

</main>

<style> 
  .blue {
    color: blue;
  }

  :global(body) {
    background-color: azure;
  }

  .logo :global(img) {
    width: 64px;
  }


  .logo img {
    border: 1px solid black;
  }
</style>
