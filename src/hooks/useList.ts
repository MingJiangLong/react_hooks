import { useMemo, useState } from "react";

export default function useList<T = any>(initState: T[] = []) {
    const [list, setList] = useState(initState);
    function push(item: T) {
        setList((pre) => {
            return [...pre, item];
        });
    }

    function pop() {
        setList((pre) => {
            return pre.splice(-1);
        });
    }

    function contact(items: T[]) {
        setList((pre) => {
            return [...pre, ...items];
        });
    }

    function shift() {
        setList((pre) => {
            return [...pre.splice(1)];
        });
    }

    function unshift(item: T) {
        setList((pre) => {
            return [item, ...pre];
        });
    }

    function keep(
        predicate: (value: T, index: number, array: T[]) => value is T,
        thisArg?: any
    ) {
        setList((pre) => {
            return [...pre.filter(predicate, thisArg)];
        });
    }

    const length = useMemo(() => {
        return list.length
    }, [list])

    return [
        list,
        {
            length,
            set: setList,
            push,
            unshift,
            pop,
            contact,
            shift,
            keep
        }
    ]
}
