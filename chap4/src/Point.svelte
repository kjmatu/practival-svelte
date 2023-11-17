<script>
    import {getContext} from 'svelte';
    import {key} from './canvas';

    export let x;
    export let y;
    export let color;

    const get2dContext = getContext(key);

    const ctx = get2dContext();

    const radius = 8;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
</script>