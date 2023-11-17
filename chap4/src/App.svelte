<script>
	import Button from './../../chap2/src/Button.svelte';
  let items = ["A", "B", "C"];

  let items2 = [
    { id: 1, name: "A", color: "black" },
    { id: 2, name: "B", color: "blue" },
    { id: 3, name: "C", color: "red" },
  ];

  function deleteItem(index) {
    items = [...items.slice(0, index), ...items.slice(index + 1)];
    items2 = [...items2.slice(0, index), ...items2.slice(index + 1)];
  }

  let num = 0;

  let scores = [
    [20, 70, 30],
    [10, 50, 40],
    [30, 60, 100],
  ];

  import Folder from "./Folder.svelte";
  let root = [
    "/",
    [
      ["/bin", ["cp", "ls", "rm"]],
      ["/home", [["/svelte", ["App.svelte", "Folder.svelte"]]]],
    ],
  ];

  import BoldText from "./BoldText.svelte";
  import LargeText from "./LargeText.svelte";
  import WrappedText from "./WrappedText.svelte";

  let options = [
    {label: "bold", component: BoldText},
    {label: "large", component: LargeText},
    {label: "wrapped", component: WrappedText},
  ];

  let selected = options[0];
  let sampleText = "これはテスト"

  import Heading from "./Heading.svelte";
  let level = 1;

  function handleKeydown(event) {
    console.log(`${event.key}が押されました`)
  }

  let y;

  function backToTop() {
    y = 0;
  }


  let entered;

  function handleMouseEnter() {
    entered = true;
  };

  function handleMouseLeave() {
    entered = false;
  };

  import SiteTitle from './SiteTitle.svelte';

  import Header from "./Header.svelte";

  // import VideoPlayer, { stopCurrent } from './VideoPlayer.svelte';
  import VideoPlayer from './VideoPlayer.svelte';

  // function handleClick() {
  //   stopCurrent();
  // };

  import {tweened} from 'svelte/motion';
  import {sineIn} from 'svelte/easing';

  const lightness = tweened(0, {easing: sineIn});

  import Canvas from './Canvas.svelte';
  import Point from './Point.svelte';

  function sampleAction(node, params) {
    console.log("要素が作成されました", node, params);

    return {
      update(params) {
        console.log("パラメータが更新されました", node, params);
      },
      destroy() {
        console.log("要素が削除されました", node);
      },
    }
  };

  let text = "initial";
  let hidden = false;

  import {observeResize} from './action';

  let width;
  let height;

  function handleResize(w, h) {
    width = w;
    height = h;
  }

</script>

<main>
  <ul>
    {#each items as item}
      <li>
        {item}
      </li>
    {/each}
  </ul>

  <ul>
    {#each items2 as item (item.id)}
      <li style:color={item.color}>
        {item.name}
      </li>
    {/each}
  </ul>

  <button on:click={() => deleteItem(1)}>2番目の要素を削除</button>

  <div>
    {@html "このテキストは強調表示"}
    {@html "<strong> このテキストは強調表示 </strong>"}
  </div>

  <!-- {@debug num}
  <input type="number" min="0" bind:value={num} /> -->

  <table>
    <thead>
      <tr>
        <td>生徒</td>
        <td>合計</td>
        <td>平均</td>
      </tr>
    </thead>
    <tbody>
      {#each scores as score, i}
        {@const total = score.reduce((a, s) => a + s)}
        <tr>
          <td>#{i + 1}</td>
          <td>{total}</td>
          <td>{total / score.length}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <ul>
    <Folder item={root} />
  </ul>


  <div>
    <select bind:value={selected}>
      {#each options as option}
        <option value={option}>{option.label}</option>
      {/each}
    </select>
    <input type="text" bind:value={sampleText}>

    <div>サンプル</div>
    <svelte:component this={selected.component} text={sampleText} />
  </div>

  <input type="number" min="1" max="6" bind:value={level}>
  <Heading {level}> これは見出しです </Heading>

  <SiteTitle title="トップページ" />

  <Header>
    サンプルサイト

    <svelte:fragment slot="menu">
      <div><a href="/products">製品</a></div>
      <div><a href="/blog">ブログ</a></div>
      <div><a href="/about">このサイトについて</a></div>
    </svelte:fragment>

  </Header>

  <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
  <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
  <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />

  <!-- <div>
    <button on:click={handleClick}>再生停止</button>
  </div> -->

  <div class="square" style:background-color={`hsl(0 0% ${$lightness}%)`} />
  <div>{$lightness.toFixed(1)}%</div>

  <button on:click={() => lightness.set(100)}>白にする</button>
  <button on:click={() => lightness.set(0)}>黒にする</button>


  <Canvas>
    <Point x={10} y={10} color="blue" />
    <Point x={30} y={30} color="red" />
    <Point x={50} y={50} color="green" />
  </Canvas>


  <Canvas>
    <Point x={15} y={30} color="yellow" />
    <Point x={100} y={20} color="orange" />
    <Point x={55} y={45} color="lime" />
  </Canvas>


  {#if !hidden}
    <div use:sampleAction={text}>
      アクションが適用された要素
    </div>
  {/if}

    <button on:click={() => {text = "updated";}}>テキストを更新</button>
    <button on:click={() => {hidden = true;}}>要素を削除</button>


    <div class="box" use:observeResize={handleResize}>
      {width} x {height}
    </div>

</main>

<!-- <svelte:window on:keydown={handleKeydown} /> -->

<!-- {#each Array(100) as _}
<div>ダミーコンテンツ</div>
{/each}
<button on:click={backToTop}>トップへ戻る</button>  
<svelte:window bind:scrollY={y} /> -->

<!-- <svelte:body on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} />
<div>
  マウス {#if entered}IN{:else}OUT{/if}
</div> -->

<style>
  .square {
    width: 100px;
    height: 100px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 20%;
    padding: 20px;
    background-color: #eee;
  }
</style>
