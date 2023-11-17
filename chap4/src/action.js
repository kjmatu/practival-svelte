export function observeResize(node, resizeHandler) {
    const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            const size = entry.contentBoxSize[0];
            resizeHandler(size.inlineSize, size.blockSize);
            }
        }
    )
    observer.observe(node);

    return {
        update(newResizeHandler) {
            resizeHandler = newResizeHandler;
        },
        destroy() {
            observer.disconnect();
        },
    }
};
