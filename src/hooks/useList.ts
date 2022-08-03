import { useMemo, useState } from "react";

type ArrayItem<T> = T extends Array<infer E> ? E : any
export default function useList<S extends Array<any>>(initState: S | (() => S)): [S, {
    length: number;
    set: React.Dispatch<React.SetStateAction<S>>;
    push: (item: ArrayItem<S>) => void;
    unshift: (item: ArrayItem<S>) => void;
    pop: () => void;
    contact: (items: S) => void;
    shift: () => void;
}] {

    const [list, setList] = useState<S>(initState);

    function push(item: ArrayItem<S>) {
        setList(pre => {
            return [...pre, item] as S;
        });
    }

    function pop() {
        setList((pre) => {
            return pre.splice(-1) as S;
        });
    }

    function contact(items: S) {
        setList((pre) => {
            return [...pre, ...items] as S;
        });
    }

    function shift() {
        setList((pre) => {
            return [...pre.splice(1)] as S;
        });
    }

    function unshift(item: ArrayItem<S>) {
        setList((pre) => {
            return [item, ...pre] as S;
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
        }
    ]
}


const [list, { push }] = useList<{ name: string, age: number }[]>([])