<script>
    let form;

    export function reset() {
        form.reset();
    }
</script>

<form bind:this={form}>
    <input type="text">
    <input type="text">
    <input type="text">
</form>