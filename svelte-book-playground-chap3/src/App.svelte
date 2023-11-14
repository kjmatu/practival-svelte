<script>
	import { currentTime, elapsed, epoch, currentIndex } from './stores.js';
	import CustomForm from './CustomForm2.svelte';
  let count = 0;

  function handleClick() {
    count += 1;
  }

  let x = 1;
  $: area = x*x;
  $: volume = x*x*x;


  let n = 1;
  let stars;

  $: console.log("nの値が${n}に変更されました。");

  $: {
    const newStars = [];
    for (let i=0; i < n; i++) {
      newStars.push(i%2 === 0 ? '★' : '');
    }
    stars = newStars;
  }


  let m = 1;
  $: if (m > 10) {
    alert("数量が多すぎます.10個以内にしてください")
    m = 10;
  }


  let todos = [];

  function handleClick2() {
    // todos.push("新しいタスク");
    // todos=todos;
    todos = [...todos, "新しいタスク"];
  }


  let range = {min: 0, max: 5};
  let values = [];

  $: {
    const newValues = [];
    for (let i=range.min; i <= range.max; i++) {
      newValues.push(i);
    }
    values = newValues;
  }

  function handleMinChange(event) {
    range.min = parseInt(event.target.value);
  }

  function handleMaxChange(event) {
    range.max = parseInt(event.target.value);
  }

  let setting = {
    volume: {value: 50},
  };

  function updateVolume(diff) {
    setting.volume.value += diff;
  }

  function handleReset() {
    resetVolume();
  }

  function resetVolume() {

    setting.volume = {value: 50};
  }


  let message = "";
  
  function handleClick3() {
    alert(`${message}と入力されました`);
    message = "";
  }


  const taxRate = 0.1;
  let price = 100;
  $: priceWithTax = Math.floor(price * (1 + taxRate));


  let isAccepted = false;


  let size = "M";

  let options = [];

  let aspect = 1/1;

  let size_1 = "M";

  let options_1 = [];

  let time;

  import CustomSelect from "./CustomSelect.svelte";

  let fruit="りんご";

  import {onMount} from "svelte";

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ddd";
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(100, 100, 200, 200);
  });

import CustomForm2 from './CustomForm2.svelte';
let customForm;

function handleClick4() {
  customForm.reset();
}

import Login from './Login.svelte';
import Menu from './Menu.svelte';

function handleChange(event) {
  epoch.set(new Date(Date.parse(event.target.value)));
}

import Images from './Images.svelte';

let images = [
  'https://github.com/svelte-book/sample-app/raw/main/static/slide-1.png',
  'https://github.com/svelte-book/sample-app/raw/main/static/slide-2.png',
  'https://github.com/svelte-book/sample-app/raw/main/static/slide-3.png',
  'https://github.com/svelte-book/sample-app/raw/main/static/slide-4.png',
  'https://github.com/svelte-book/sample-app/raw/main/static/slide-5.png',
]
</script>

<main>
  <button on:click={handleClick}>{count}回クリックされました</button>

  <div>
    1辺の長さ:
    <button on:click={() => (x=x-1)} disabled={x<=1}> - </button>

    {x}m

    <button on:click={() => (x=x+1)}> + </button>
  </div>

  <div>面積: {area}m<sup>2</sup></div>
  <div>体積: {volume}m<sup>3</sup></div>


  <div>
    {#each stars as star} {star} {/each}
  </div>

  <div>
    <button on:click={() => (n -= 1)} disabled={n <= 1}>星を減らす</button>
    <button on:click={() => (n += 1)}>星を増やす</button>
  </div>


  <div>
    数量: {m}
  </div>

  <div>
    <button on:click={() => (m -= 1)} disabled={m <= 1}>減らす</button>
    <button on:click={() => (m += 1)} >増やす</button>
  </div>

  <ul>
    {#each todos as todo}
      <li>{todo}</li>
    {/each}
    <button on:click={handleClick2}>追加</button>
  </ul>


  <div>
    <input type="number" min={0} max={range.max} value={range.min} on:change={handleMinChange}>
    <input type="number" min={range.min} max={100} value={range.max} on:change={handleMaxChange}>
  </div>

  {#each values as value}
    <button>{value}</button>
  {/each}


  <div>音量: {setting.volume.value}%</div>
  <button on:click={() => updateVolume(-10)}>-10</button>
  <button on:click={() => updateVolume(10)}>+10</button>
  <button on:click={handleReset}>リセット</button>

  <div>
    <input type="text" bind:value={message}>
    <button on:click={handleClick3}>表示</button>
  </div>

  <div>価格: <input type="number" bind:value={price}>円</div>
  <div>税込価格: {priceWithTax}円</div>


  <label>
    <input type="checkbox" bind:checked={isAccepted}>
    規約に同意
  </label>
  <div>
    <button disabled={!isAccepted}>送信</button>
  </div>


  <h4>サイズ</h4>
  <label>
    <input type="radio"  bind:group={size} value="S">
    Sサイズ
  </label>
  <label>
    <input type="radio"  bind:group={size} value="M">
    Mサイズ
  </label>
  <label>
    <input type="radio"  bind:group={size} value="L">
    Lサイズ
  </label>

  <h4>トッピング</h4>
  <label>
    <input type="checkbox" bind:group={options} value="マヨネーズ">
    マヨネーズ
  </label>
  <label>
    <input type="checkbox" bind:group={options} value="ケチャップ">
    ケチャップ
  </label>
  <label>
    <input type="checkbox" bind:group={options} value="タバスコ">
    タバスコ
  </label>

  <button>
    {size}サイズ
    {#if options.length > 0}
      (トッピング: {options.join(',')})
    {/if}
    で注文
  </button>

  <div>
    <label>
      <input type="radio" bind:group={aspect} value={1/1}>
      1:1
    </label>
    <label>
      <input type="radio" bind:group={aspect} value={4/3}>
      4:3
    </label>
    <label>
      <input type="radio" bind:group={aspect} value={16/9}>
      16:9
    </label>
    <div style:width="300px" style:height="{300/aspect}px" style:background-color="gray" />
  </div>

  <select bind:value={size_1}>
    <option value="S">Sサイズ</option>
    <option value="M">Mサイズ</option>
    <option value="L">Lサイズ</option>
  </select>
  <button>{size_1}サイズで注文</button>


  <select multiple bind:value={options_1}>
    <option value="マヨネーズ">マヨネーズ</option>
    <option value="ケチャップ">ケチャップ</option>
    <option value="タバスコ">タバスコ</option>
  </select>

  <div>
    トッピング:
    {#if options_1.length > 0}
      {options_1.join(',')}
    {:else}
      選択なし
    {/if}
  </div>

  <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" width="300" controls bind:currentTime={time}>
      <track kind="captions">
  </video>

  <div>
    {#each [1,2,3,4,5] as t}
      <button on:click={() => (time =t)} > {t}秒へジャンプ></button>
    {/each}
  </div>

  {#if time !== undefined}
    <div>{time}秒付近を再生中...</div>
  {/if}


  <div>選択中: {fruit}</div>
  <CustomSelect bind:value={fruit} options={["りんご", "ばなな", "ぶどう"]} />

  <div>
    <canvas bind:this={canvas} width="200" height="200"></canvas>
  </div>

  <CustomForm2 bind:this={customForm} />
  <button on:click={handleClick4}>リセット</button>

  <div>
    <Login />
    <Menu />
  </div>

  <p>現在時刻は {$currentTime.toLocaleString()}です。</p>
  <p>UNIXエポックから {$elapsed}秒経過しています</p>

  <div>
    <label for="epoch">基準時刻</label>
    <input id="epoch" type="datetime-local" on:change={handleChange}>
  </div>

  <p>現在時刻は {$currentTime.toLocaleString()}です。</p>
  <p>基準時刻から {$elapsed} 秒経過しています</p>

  <Images {images} />
  <div>
    <button on:click={() => currentIndex.moveRight(images.length)}>←</button>
    <button on:click={() => currentIndex.moveLeft(images.length)}>→</button>
  </div>


</main>

<style>
</style>
