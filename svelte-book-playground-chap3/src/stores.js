import {writable, readable, derived} from 'svelte/store';

export const isLogin = writable(false);

// export const currentTime = readable(new Date(), function start(set) {
//     const timer = setInterval(() => {
//         set(new Date());
//     }, 1000);

//     return function stop() {
//         clearInterval(timer);
//     };
// });

export const currentTime = readable(new Date(), (set) => {
    const timer = setInterval(() => set(new Date()), 1000)
    return () => clearInterval(timer)
});

export const epoch = writable(new Date(0));

export const elapsed = derived([currentTime, epoch], ([$currentTime, $epoch]) => {
    return Math.floor(($currentTime.getTime() - $epoch.getTime()) / 1000);
});


function createCurrentIndexStore() {
    const index = writable(0);

    return {
        subscribe: index.subscribe,
        moveLeft: (length) => {
            index.update(($index) => $index === length - 1 ? 0: $index + 1)
        },
        moveRight: (length) => {
            index.update(($index) => $index === 0 ? length - 1 : $index - 1)
        },
    };
}

export const currentIndex = createCurrentIndexStore();