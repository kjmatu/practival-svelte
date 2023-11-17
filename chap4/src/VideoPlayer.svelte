<script context="module">
    let currentPlaying = null;
</script>


<script>
    export let src;
    let video;

    function handlePlay() {
        if (currentPlaying && video !== currentPlaying) {
            currentPlaying.pause();
        }

        currentPlaying = video;
    };

    export function stopCurrent() {
        if (currentPlaying) {
            currentPlaying.pause();
        }
    }
</script>

<video bind:this={video} {src} controls loop on:play={handlePlay} />


<style>
    video {
        max-width: 300px;
    }
</style>