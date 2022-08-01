import useMount from "./useMount";

export default function useUnmount(fn: () => any) {
    useMount(() => () => {
        if (typeof fn === 'function') {
            fn()
        }
    })
}