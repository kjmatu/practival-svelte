<script>
    export let item;
</script>


{#if typeof item === 'string'}
    <li>{item}</li>
{:else if Array.isArray(item)}
    <li>
        {item[0]}
        <ul>
            {#each item[1] as i}
                <svelte:self item={i} />
            {/each}
        </ul>
    </li>
{/if}
