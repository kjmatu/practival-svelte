<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("hello", "こんにちは");
    }
</script>


<button on:click={handleClick}>ここをクリック</button>