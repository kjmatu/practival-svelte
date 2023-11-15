<script>
    export let value;
    export let options;

    let open = false;

    const handleButtonClick = () => {
        open = !open;
    }

    const handleOptionClick = (option) => () => {
        value = option;
        open = false;
    }
</script>

<button on:click={handleButtonClick}> {value} </button>

{#if open}
    <ul>
        {#each options as option}
            <li on:click={handleOptionClick(option)}>{option}</li>
        {/each}
    </ul>
{/if}
