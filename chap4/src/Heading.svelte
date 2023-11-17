<script>
    export let level;
</script>

<svelte:element this={`h${level}`}>
    <slot />
</svelte:element>