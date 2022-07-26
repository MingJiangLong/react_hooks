import { DependencyList, useEffect, useRef } from "react";
export default function useListenerCallback<T extends Array<any>>(
    fn: Fn<T>,
    deps: DependencyList
) {
    const loadingRef = useRef(false);
    const fnRef = useRef<Fn<T>>();

    useEffect(() => {
        fnRef.current = fn;
    }, deps);

    function executor(...args: T) {
        let result = fnRef.current && fnRef.current({ loading: loadingRef.current, params: args });
        loadingRef.current = true;
        if (result && result.then && typeof result.then === "function") {
            return result.then(
                (data: any) => {
                    loadingRef.current = false;
                    return data;
                },
                (error: any) => {
                    loadingRef.current = false;
                    return error;
                }
            );
        } else {
            loadingRef.current = true;
        }
    }

    function updateStatus(value: boolean) {
        loadingRef.current = !!value;
    }
    return {
        executor,
        updateStatus
    };
}

type Fn<T> = (item: { loading: boolean; params: T }) => any