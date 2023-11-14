<script>
    import {onDestroy} from 'svelte';
    import {isLogin} from './stores.js';

    // let login;

    // const unsubscribe = isLogin.subscribe(value => {
    //     login = value;
    // });

    function handleLogin() {
        $isLogin = true;
        // isLogin.set(true);
    }

    function handleLogout() {
        $isLogin = false;
        // isLogin.set(false);
    }

    // onDestroy(() => {
    //     unsubscribe();
    // });

</script> 

{#if $isLogin}
    <button on:click={handleLogout}>Logout</button>
{:else}
    <button on:click={handleLogin}>Login</button>
{/if}
