<div>
    <h1><slot /></h1>
    <div class="menu">
        <slot name="menu" />
    </div>
</div>

<style>
    .menu {
        display: flex;
        align-items: center;
        gap: 1em;
    }
</style>