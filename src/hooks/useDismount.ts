import useMount from "./useMount";

export default function useDismount(fn: () => any) {
    useMount(() => () => {
        if (typeof fn === 'function') {
            fn()
        }
    })
}