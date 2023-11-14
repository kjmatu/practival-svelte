<script>
	import { isLogin } from './stores.js';
	// import { onDestroy } from 'svelte';

    // let login;

    // const unsubscribe = isLogin.subscribe(value => {
    //     login = value;
    // });

    // onDestroy(unsubscribe);
</script>

<ul>
    <li><a href="/">トップ</a></li>
    <li><a href="/blog">ブログ</a></li>
    <li><a href="/about">このサイトについて</a></li>

    {#if $isLogin}
        <li><a href="/dashboard">会員メニュー</a></li>
    {/if}
</ul>