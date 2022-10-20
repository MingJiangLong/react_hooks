import { DependencyList, useEffect, useRef } from "react";

export default function useUpdateOnce(callback: () => void, dev: DependencyList) {
    const haveUpdate = useRef(false);
    useEffect(() => {
        if (haveUpdate.current) return;
        haveUpdate.current = true
        typeof callback === 'function' && callback()
    }, dev)
}