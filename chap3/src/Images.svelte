<script>
	import { currentIndex } from './stores.js';

    export let images;

    $: leftIndex = $currentIndex === 0 ? images.length - 1: $currentIndex - 1;
    $: rightIndex = $currentIndex === images.length - 1 ? 0 : $currentIndex + 1;
</script>

<div class="container">
    <div class="images">
        <img src="{images[leftIndex]}" alt="" class="image left">
        <img src="{images[$currentIndex]}" alt="" class="image">
        <img src="{images[rightIndex]}" alt="" class="image right">
    </div>
</div>

<style>
    .container {
        width: 375px;
        overflow: hidden;
    }

    .images {
        position: relative;
        width: 80%;
        margin: 0 10%;
    }

    .image {
        width: 100%;
    }

    .image.left {
        position: absolute;
        top: 0;
        right: 100%;
    }

    .image.right {
        position: absolute;
        top: 0;
        left: 100%;
    }


</style>