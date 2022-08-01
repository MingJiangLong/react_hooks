export default function deepClone(value: any): any {

    if (typeof value !== 'object' || value === null) return value;

    if (Array.isArray(value)) {
        return value.map((item) => {
            return deepClone(item)
        })
    } else {
        let tempt: any = {};
        Object.keys(value).forEach(key => {
            tempt[key] = deepClone(value[key])
        })
        return tempt;
    }

}

