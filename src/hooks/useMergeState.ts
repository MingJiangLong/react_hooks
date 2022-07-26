import { useState } from "react";

export default function useMergeState<T extends { [k: string]: any }>(initState: T) {
    const [state, setState] = useState<T>(initState)
    function mergeState(value: T) {
        setState(pre => ({
            ...pre,
            ...value
        }))
    }

    return {
        state,
        mergeState,
        setState
    }
}
