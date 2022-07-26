import { useRef } from "react";

export default function useOnce(fn: () => any) {
    const isInvoked = useRef(false)

    if (isInvoked.current) return;
    isInvoked.current = true;
    if (typeof fn === 'function') {
        fn()
    }
}