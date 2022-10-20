import { Dispatch, SetStateAction, useState } from "react";

export default function useKeyvalue<T extends { [k: string]: any }>(initState: T | (() => T)): [T, {
    mergeState: (value: { [k in keyof T]?: T[k] }) => void,
    setState: Dispatch<SetStateAction<T>>
}] {
    const [state, setState] = useState<T>(initState)

    function mergeState(value: Partial<{ [k in keyof T]: T[k] }>) {
        setState(pre => ({
            ...pre,
            ...value
        }))
    }

    return [state, { mergeState, setState }]
}
