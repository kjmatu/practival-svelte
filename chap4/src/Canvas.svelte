<script>
    import {onMount, setContext} from 'svelte';
    import {key} from './canvas';

    let canvas;

    setContext(key, () => canvas.getContext("2d"));
</script>


<canvas bind:this={canvas} />
{#if canvas}
    <slot />
{/if}
